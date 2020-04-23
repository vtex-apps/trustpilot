import { PixelMessage, OrderPlacedTrackedData } from './typings/events'
import { createProductInvitation } from './modules/invitation'

function isOrderPlacedTrackedEvent(
  e: PixelMessage
): e is PixelMessage<OrderPlacedTrackedData> {
  return e.data.eventName === 'vtex:orderPlacedTracked'
}

export function handleEvents(e: PixelMessage) {
  if (isOrderPlacedTrackedEvent(e)) {
    createProductInvitation(e.data)
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('message', handleEvents)
}
