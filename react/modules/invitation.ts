import { OrderPlacedTrackedData } from '../typings/events'

export function createProductInvitation(eventData: OrderPlacedTrackedData) {
  const { visitorContactInfo, orderGroup, transactionProducts } = eventData

  const [email, name, lastname] = visitorContactInfo
  const products = transactionProducts.map(product => {
    return {
      sku: product.sku,
      productUrl: `${window.location.origin}/${product.slug}/p`,
      name: product.name,
    }
  })
  const skus = products.map(p => p.sku)

  const tpData = {
    recipientEmail: email,
    recipientName: `${name} ${lastname}`,
    referenceId: orderGroup,
    source: 'InvitationScript',
    productSkus: skus,
    products,
  }

  window.tp('createInvitation', tpData)
}
