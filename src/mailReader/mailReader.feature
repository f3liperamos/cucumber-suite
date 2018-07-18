Feature: Example
    Basic structure for feature tests

    Scenario: Scenario 1 - Single feature
        Given I have one unread mail
        When I read a mail
        Then I should have no mails left

    Scenario Outline: Scenario 2 - Working with outlines
        Given I have <unread> unread mails
        When I read <read> mails
        Then I should have <left> unread mails

        Examples:
            | unread | read | left |
            |     10 |    2 |    8 |
            |      8 |    5 |    3 |
            |      3 |    5 |    0 |
