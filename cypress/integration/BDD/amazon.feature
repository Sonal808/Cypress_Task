Feature: Product seletion into the shopping cart


    application smoke

    Scenario: Product add to cart
    Given I open Amazon page
    When I search a product
    Then I select a product 
    And I add to the cart
    And I check the cart