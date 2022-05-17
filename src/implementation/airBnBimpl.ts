import { Given, When } from '@wdio/cucumber-framework'
import { me } from '../../me'


Given('user navigates to amazon', async function () {
    await me.onPage("https://www.amazon.in/")
    const elementsText = await me.grabAllElementsText("//h2")
    const iscli = await me.isClickable("//span[contains(text(),'Returns')]")

})

When('clicks on Return Orders', async function () {


    //await me.click("//span[contains(text(),'Returns')]")
//await me.click("//input[@id='twotabsearchtextbox']")
await me.clearValue("//input[@id='twotabsearchtextbox']")
await me.getProperty("//span[contains(text(),'Returns')]","tagName")
})


