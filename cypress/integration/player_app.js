describe("Player-Drafting-Application", function(){
	it("should open up", function() {
		cy.visit("http://127.0.0.1:8080/#!/players")
	})

	it("should have card element", function() {
		cy.get('md-card').should('contain', 'Markelle Fultz')
	})

	it("should display ten cards", function() {
		cy.get('md-content').find('md-card').should('have.length', 10)
	})

	it("should not be able to see the select dropdown", function() {
		cy.get('md-card').not('md-select').should('not.contain', 'selector')
	})

	it("should be able to click the buttons", function() {
		cy.get('md-card').eq(0).find('button').should('contain','Draft').then(function($ele) {
			$ele.eq(0).click()
		})
	})

	// it("Now I should be able to see the select dropdown", function() {
	// 	cy.get('md-card').find('md-select')
	// 	.should(function($x) {
	// 		var items = $x.map(function(i,el) {
	// 			return Cypress.$(el).text
	// 		})

	// 		var texts = items.get()
	// 		expect(texts).to.have.length(10)
	// 	})
	// })

	// it("Los Angeles Lakers should be the second item on list", function() {
	// 	cy.get('md-card md-select').then(function($ele){
	// 		expect($ele).to.have.length(10)
	// 		expect($ele.eq(1)).to.contain("Los Angeles Lakers")
	// 	})
	// })

	it("Should be able to select Lost Angeles Lakers", function() {
		cy.get('md-card md-select').eq(0).should('contain', 'Philadelphia 76ers')
		cy.get('md-select').then(function ($sel) {
			// body...
			$sel.eq(8).click()
		})
	})
})