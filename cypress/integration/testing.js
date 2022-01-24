/// <reference types = "cypress" />

const imageSquare = ':nth-child(1) > .banner-square > .row > [style="order:3"] > :nth-child(1) > .no-underline > .banner-square-wrapper > .banner-square-image'
const image1 = ':nth-child(1) > .banner-square > .row > [style="order:3"] > :nth-child(1) > .no-underline > .banner-square-wrapper > .banner-square-image > .block'
const textSquare = ':nth-child(2) > .banner-square > .row > .overlay-on-top > :nth-child(1) > .overflow > .banner-square-wrapper > :nth-child(1) > .banner-square-overlay > .banner-square-overlay-container'


it('check if image exists' , function() {

    cy.visit('https://butopea.com')
    // visit the butopea website 

    //cy.get(':nth-child(1) > .banner-square > .row > [style="order:3"] > :nth-child(1) > .no-underline > .banner-square-wrapper > .banner-square-image')
    cy.get(imageSquare)
    .find('img').should('have.attr','src')
    //check if the square at the top right contains an image

    cy.get(image1)
        .invoke('attr','src').then((url)=>{cy.log(url)}) 
    // extract the url of the existing image
    cy.screenshot()
    })


    const textSquare2 = ':nth-child(2) > .banner-square > .row > .overlay-on-top > :nth-child(1) > .overflow > .banner-square-wrapper > :nth-child(1) > .banner-square-overlay > .banner-square-overlay-container'
    //const textSquare1 = ':nth-child(1) > .banner-square > .row > [style="order:2"] > :nth-child(1) > .overflow > .banner-square-wrapper > :nth-child(1) > .banner-square-overlay > .banner-square-overlay-container'
    // we can apply it to each square containing text and button, through a loop and list of textSquares 
    
it ('extract content from square', function(){
    cy.get(textSquare2)
        .find('p') // validates the existence of a paragraph in the text square selected 
        .should('not.be.empty')
        .then(($el)=> cy.log($el.text())
)
    cy.get(textSquare2)
    .find('button')
    .then(($el)=> cy.log($el.text()))

  cy.screenshot()
})
const listProducts = 'product-listing'
const firstProduct = ':nth-child(1) > .product'
it('click, check list, extract',
    {defaultCommandTimeout: 20000}, function(){

    cy.visit('https://butopea.com')
    cy.get(':nth-child(3) > .secondary-font')
    .click()
    // Click on the new products tab

    cy.get(listProducts).should('not.be.empty')
    .then(()=> {cy.log( listProducts.length)})
    //assert that the page contains list of products and show how many products are shown

    // for each product do the following : log its link, its title, its price and its image URL
    for (let i = 1; i <listProducts.length ; i++) {
        cy.get(".product-listing > :nth-child(" + i + ")")
        .find('a')
        .invoke('attr', 'href').then((url)=>{cy.log('The product link is : ' + url)}) 
        // log the product link

        cy.get(':nth-child(' + i + ') > .product > [data-testid="productLink"] > .product-tile-info > .mb5')
        .should('not.be.empty')
        .then(($el)=> {cy.log('The product title is : '+$el.text())})
        // log the product title 

        cy.get(':nth-child(' + i +  ') > .product > [data-testid="productLink"] > .product-tile-info > .lh30')
        .then(($el)=> cy.log('The product price is : ' + $el.text()))
        // log the product price

        cy.get(':nth-child(' + i +  ') > .product > [data-testid="productLink"] > .product-cover > .v-lazy-component > [data-testid="productSecondImage"] > .preview-img-item')
        .invoke('attr','data-src')
        .then ((url)=>{cy.log('The product image URL is : ' +  url)})
        // log the product's image URL 
    }

   cy.screenshot()
})


