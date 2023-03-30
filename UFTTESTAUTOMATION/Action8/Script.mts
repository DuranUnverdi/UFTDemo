SystemUtil.Run "https://chercher.tech/practice/explicit-wait-sample-selenium-webdriver"
Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebButton("Change").Click
wait(10)
Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebElement("h2selenium").CheckProperty "innerhtml" ,"Selenium Webdriver"

Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebButton("Display_2").Click
wait(10)
Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebButton("Enabled").CheckProperty "innerhtml" ,"Enabled"

Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebButton("Enable").Click
wait(10)
Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").Image("notWebP").Click

Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebButton("Checkbx").Click
wait(10)
Browser("ExplicitlyWait Practice page i").Page("ExplicitlyWait Practice page i").WebCheckBox("checkboxplus").CheckProperty "checked", "1"

