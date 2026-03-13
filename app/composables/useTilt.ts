import type { MaybeRef } from 'vue'
import {
  useDeviceOrientation,
  useMouseInElement,
  useRafFn,
} from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'

interface UseTiltOptions {
  max?: number
  perspective?: number
  scale?: number
  speed?: number
  glare?: boolean
  mobile?: boolean
}

export function useTilt(
  target: MaybeRef<HTMLElement | null>,
  options: UseTiltOptions = {},
) {
  const {
    max = 8,
    perspective = 900,
    scale = 1.03,
    speed = 0.12,
    glare = true,
    mobile = true,
  } = options

  const rx = ref(0)
  const ry = ref(0)

  const targetRX = ref(0)
  const targetRY = ref(0)

  const px = ref(0.5)
  const py = ref(0.5)

  const tilt = computed(() => ({
    '--rx': `${rx.value}deg`,
    '--ry': `${ry.value}deg`,
    '--px': `${px.value}`,
    '--py': `${py.value}`,
    '--scale': scale,
    '--perspective': `${perspective}px`,
  }))

  const glareStyle = computed(() => {
    if (!glare)
      return {}

    return {
      '--glare-x': `${px.value * 100}%`,
      '--glare-y': `${py.value * 100}%`,
      '--glare-opacity': 0.35,
    }
  })

  onMounted(() => {
    const {
      elementX,
      elementY,
      elementWidth,
      elementHeight,
      isOutside,
    } = useMouseInElement(target)

    const { beta, gamma } = useDeviceOrientation()

    function updateMouse() {
      const w = elementWidth.value
      const h = elementHeight.value

      if (!w || !h || isOutside.value) {
        targetRX.value = 0
        targetRY.value = 0
        px.value = 0.5
        py.value = 0.5
        return
      }

      px.value = elementX.value / w
      py.value = elementY.value / h

      targetRX.value = (0.5 - py.value) * max
      targetRY.value = (px.value - 0.5) * max
    }

    function updateMobile() {
      if (!mobile || beta.value == null || gamma.value == null)
        return

      targetRX.value = beta.value / 45
      targetRY.value = gamma.value / 45
    }

    useRafFn(() => {
      updateMouse()
      updateMobile()

      rx.value += (targetRX.value - rx.value) * speed
      ry.value += (targetRY.value - ry.value) * speed
    })
  })

  return {
    tilt,
    glareStyle,
  }
}
