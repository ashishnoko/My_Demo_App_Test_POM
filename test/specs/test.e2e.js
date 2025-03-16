const { expect, browser } = require('@wdio/globals')
const MyDemoApp = require('../pageobjects/login.page');



describe('My Demo App', () => {


    it('Hamburger btn', async () => {
        await browser.pause(3000)
        await MyDemoApp.menu()
        await browser.pause(3000)
    });

    it('Webview', async () => {
        await MyDemoApp.web_view()
    });

    it('QR Scanner', async () => {
        await browser.pause(3000)
        await MyDemoApp.click_hamicon.click()
        await MyDemoApp.qrscanner()
        await browser.pause(3000)
    });

    it('Geo location', async () => {
        await browser.pause(3000)
        await MyDemoApp.click_hamicon.click()
        await MyDemoApp.geolocation()

    });

    it('About', async () => {
        await MyDemoApp.click_hamicon.click()
        await MyDemoApp.abo_ut()
        await browser.pause(5000)
    });

    it('Fingerprint', async () => {
        await MyDemoApp.menu()
        await MyDemoApp.fingerprint()
    });


    it('loggin ',async () => {

        await MyDemoApp.menu()
        await MyDemoApp.loginNavbar()
        await MyDemoApp.login('bob@example.com','10203040')
    });

   


    it("draw a rectangle", async () => {

        
        await Navigation.open();
        
        await Navigation.drawing.click();
        
        await browser.pause(5000);
        
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                  {
                    type: "pointerMove",
                    duration: 0,
                    x: 215,
                    y: 748,
                    origin: "viewport",
                  },
                  { type: "pointerDown", button: 0 },
        
                  {
                    type: "pointerMove",
                    duration: 500,
                    x: 815,
                    y: 748,
                    origin: "viewport",
                  },
        
                  {
                    type: "pointerMove",
                    duration: 500,
                    x: 815,
                    y: 1200,
                    origin: "viewport",
                  },
        
                  {
                    type: "pointerMove",
                    duration: 500,
                    x: 215,
                    y: 1200,
                    origin: "viewport",
                  },
        
                  {
                    type: "pointerMove",
                    duration: 500,
                    x: 215,
                    y: 748,
                    origin: "viewport",
                  },
        
                  { type: "pointerUp", button: 0 },
                ],
            },
        ]);
        await $("id:com.saucelabs.mydemoapp.android:id/clearBtn").click();
    });

    it('Cart',async () => {

        await MyDemoApp.cart()
        await MyDemoApp.login('bob@example.com','10203040')
        await browser.pause(5000)
        await MyDemoApp.checkout('Bruno Fernandes','Portugal','Manchester','Kathmandu','Cornwall','444600','Nepal')
        await browser.pause(5000)
       
    });

    

});



    



    




    














