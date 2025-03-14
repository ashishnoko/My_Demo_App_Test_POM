const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const loginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page')

describe('My Demo App', () => {

    //before(async () => {
        //await browser.pause(5000)
        
    //})

    //after(async () => {
        //await browser.pause(5000)
        //await browser.back()
        
    //});

    it('Hamburger btn', async () => {
        await browser.pause(3000)

        await LoginPage.click_hamicon.click()
        await browser.pause(3000)

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
       
    });

    it('Webview', async () => {
        await browser.pause(3000)

        await LoginPage.click_hamicon.click()
        await browser.pause(3000)
        await LoginPage.webview.click()
        await LoginPage.url_input_field.setValue('www.google.com')
        await LoginPage.go_to_site_btn.click()
        await browser.pause(5000)
        await browser.back()

       
       
    });

    it('QR Scanner', async () => {
        await browser.pause(3000)

        await LoginPage.click_hamicon.click()
        await browser.pause(3000)
        await LoginPage.qr_scanner.click()
        await browser.pause(5000)
        await browser.back()

       
       
    });


    it('Geo location', async () => {
        await browser.pause(3000)

        await LoginPage.click_hamicon.click()
        await browser.pause(3000)
        await loginPage.geo_location.click()
        await browser.pause(3000)
        await LoginPage.start_observing.click()
        await browser.pause(3000)
        await LoginPage.stop_observing.click()
        await browser.pause(5000)
        await browser.back()

       
       
    });

    it('About', async () => {
        await browser.pause(3000)
        await LoginPage.click_hamicon.click()

        await LoginPage.about.click()
        await browser.pause(5000)
        await browser.back()

    });

    it('Reset App State', async () => {
        await browser.pause(3000)
        await LoginPage.click_hamicon.click()

        await LoginPage.reset_app_state.click()
        await browser.pause(3000)
        await loginPage.reset_app.click()
        await browser.pause(3000)
        await loginPage.click_ok.click()
        await browser.pause(3000)
        await browser.back()

    });

    it('Fingerprint', async () => {
        await browser.pause(3000)
        await loginPage.click_hamicon.click()
        await browser.pause(3000)
        await LoginPage.finger_print.click()
        await browser.pause(3000)
        await loginPage.allow_login.click()
      
    });

    it('log in',async () => {
        
        await loginPage.click_hamicon.click()
        await browser.pause(3000)
        await loginPage.log_in.click()
        await loginPage.username.setValue('bob@example.com')
        await loginPage.password.setValue('10203040')
        await loginPage.login_btn.click()
        await browser.pause(5000)
        
    });


    it('log in',async () => {


        await loginPage.click_hamicon.click()
        await browser.pause(3000)
        await loginPage.logout.click()
        await browser.pause(3000)
        await loginPage.click_logout.click()
        await loginPage.click_ok.click()
      
        await browser.pause(5000)
        await browser.back()
        
    });


    it('Proceed to checkout',async () => {


        await loginPage.products.click()
        await browser.pause(3000)
        

        await loginPage.addtocart.click()
        await browser.pause(3000)
        await loginPage.cart_icon.click()
        await browser.pause(3000)

        for (let i =0; i<5;i++){

            await loginPage.add_the_product.click()


        }

        await loginPage.proceed_to_checkout.click()
        await loginPage.username.setValue('bob@example.com')
        await loginPage.password.setValue('10203040')

        await loginPage.login_btn.click()

        await loginPage.full_name.setValue('Bruno Fernandes')
        await loginPage.addressline1.setValue('Manchester Road')
        await loginPage.addressline2.setValue('Portugal')
        await loginPage.city.setValue('Chelsea')
        await loginPage.state_region.setValue('Cornwall')
        await loginPage.zip_code.setValue('89750')
        await loginPage.country.setValue('England')
        await loginPage.payment.click()

        await browser.pause(5000)

        await loginPage.full_name_2.setValue('Alex Ferguson')
        await loginPage.card_number.setValue('324 7889 09987')
        await loginPage.expiration_date.setValue('04/26')
        await loginPage.security_code.setValue('123')

        await loginPage.review_order_btn.click()

        await browser.pause(5000)

        await loginPage.place_order.click()
        await loginPage.continue_shopping.click()
        await browser.pause(5000)
    
        
    });

    it('logIn ',async () => {

        await LoginPage.click_hamicon.click()

        await browser.pause(3000)
        await LoginPage.login ('bob@exmaple.com','10203040')



    });

    it('loggin ',async () => {

        await LoginPage.click_hamicon.click()

        await browser.pause(3000)

        await LoginPage.log_in.click()
        await browser.pause(3000)
        await loginPage.login('bob@exmaple.com','10203040')

        await browser.pause(3000)


    



    });

   


    it.only("draw a rectangle", async () => {

        
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
    

});



    



    




    













})

