

export class me {
    static async onPage(text: string) {
        await browser.url(text);


    }
    static async grabAllElments(locator: string): Promise<any> {

        const elements = await browser.$$(locator);
        return elements;
    }
    static async grabAllElementsText(locator: string) {

        let elements = await browser.$$(locator);

        let allElementsText = [];
        for (let index = 0; index < elements.length; index++) {


            allElementsText.push(await elements[index].getText());

        }
        return allElementsText;
    }
    static async isClickable(locator: string) {
        let isEnabled = await browser.$(locator).isEnabled()

        //console.log(isEnabled)
        return isEnabled;

    }

    static async click(locator: string) {
        try {

            let isEnabled = await browser.$(locator).isEnabled()
            let isclickable = await browser.$(locator).isClickable()
            if (isEnabled && isclickable) {
                await browser.$(locator).click()
            }
            else {
                console.log("Not able to click")
            }
        } catch (error) {
            console.log(error)
        }


    }
    static async getProperty(locator: string, propertyName: string) {
        try {
            let Element = await browser.$(locator)
            let propertyname = await Element.getProperty(propertyName);

            //console.log(propertyname, '****************prp---name*************')
            return propertyname;

        } catch (error) {

            console.log(error)
        }


    }
    static async clearValue(locator: string) {
        try {

            const element = await browser.$(locator);
            const displayed = element.isDisplayed();
            const enabled = element.isEnabled();
            if (displayed && enabled) {
                element.clearValue();
            } else {
                console.log();

            }
        } catch (error) {

        }

    }

}
