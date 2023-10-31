@O2CAPNM-932
Feature: Default

	
	@O2CAPNM-1098
	Scenario: Cypress integration with Jira+XRAY
		Given I am on empty home page
		    When I type in google and submit
		    Then I should be redirected to the board detail	
