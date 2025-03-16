const { $, browser } = require('@wdio/globals')
const Page = require('./page');


class MyDemoApp extends Page {
    /**
     * define selectors using getter methods
     */
  
    //First Products
    get product(){return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]')}


    get star(){ return $('(//android.widget.TextView[@text="󰓏"])[5]')}
    get circle(){ return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]')}
    get counter_plus(){ return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]')}
    
    //Add to cart 
    get addtocart(){ return $('//android.view.ViewGroup[@content-desc="Add To Cart button"]')}
    
    //Hamburger icon
    get click_hamicon(){return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')}
    
    //Webview Locators
    get webview(){ return $('~menu item webview')}
    get url_input_field(){ return $('//android.widget.EditText[@content-desc="URL input field"]')}
    get go_to_site_btn(){ return $('//android.widget.TextView[@text="Go To Site"] ')}

    //QR Scanner
    get qr_scanner(){ return $('//android.view.ViewGroup[@content-desc="menu item qr code scanner"]')}

    //Drawing
    
    get drawing(){return $('//android.view.ViewGroup[@content-desc="menu item drawing"]')}

    //Geo location

    get geo_location(){return $('//android.view.ViewGroup[@content-desc="menu item geo location"]')}
    get start_observing() {return $('//android.view.ViewGroup[@content-desc="Start Observing button"]')}
    get stop_observing(){return $('//android.view.ViewGroup[@content-desc="Stop Observing button"]')}

    //About

    get about(){return $('//android.view.ViewGroup[@content-desc="menu item about"]')}


    //Reset App state 

    get reset_app_state(){return $('//android.view.ViewGroup[@content-desc="menu item reset app"]')}

    get reset_app(){return $('//android.widget.Button[@resource-id="android:id/button1"]')}

    get click_ok(){return $('//android.widget.Button[@resource-id="android:id/button1"]') }


    //Fingerprint 

    get finger_print(){return $('//android.view.ViewGroup[@content-desc="menu item biometrics"]')}
    get allow_login(){ return $('//android.widget.Switch[@content-desc="biometrics switch"]')}

    //Login 

    get log_in(){return $('//android.view.ViewGroup[@content-desc="menu item log in"]')}

    get username(){ return $('//android.widget.EditText[@content-desc="Username input field"]')}

    get password(){ return $('//android.widget.EditText[@content-desc="Password input field"]')}

    get login_btn(){ return $('//android.view.ViewGroup[@content-desc="Login button"]')}



    //Logout 


    get logout(){ return $('//android.view.ViewGroup[@content-desc="menu item log out"]')}

    get click_logout(){ return $('//android.widget.Button[@resource-id="android:id/button1"]')}

    get click_ok(){return $('//android.widget.Button[@resource-id="android:id/button1"]')}


    //Cart icon 

    get cart_icon(){return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')}


    //Go shopping


    get shopping(){return $('//android.widget.TextView[@text="Go Shopping"]')}

    //Remove item

    get shopping(){return $('//android.widget.TextView[@text="Remove Item"]')}

    //Proceed to checkout

    get proceed_to_checkout(){return $('//android.widget.TextView[@text="Proceed To Checkout"]')}

    //Add the product 

    get add_the_product(){return $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView')}

    //For Checkout
    get full_name(){return $('//android.widget.EditText[@content-desc="Full Name* input field"]')}
    

    get addressline1(){return $('//android.widget.EditText[@content-desc="Address Line 1* input field"]')}
    get addressline2(){return $('//android.widget.EditText[@content-desc="Address Line 2 input field"]')}

    get city(){return $ ('//android.widget.EditText[@content-desc="City* input field"]')}

    get state_region(){return $('//android.widget.EditText[@content-desc="State/Region input field"]')}

    get zip_code(){ return $('//android.widget.EditText[@content-desc="Zip Code* input field"]')}

    get country(){ return $('//android.widget.EditText[@content-desc="Country* input field"]')}

    get payment(){ return $('//android.widget.TextView[@text="To Payment"]')}

    get full_name_2(){ return $('//android.widget.EditText[@content-desc="Full Name* input field"]')}

    get card_number(){ return $('//android.widget.EditText[@content-desc="Card Number* input field"]')}

    get expiration_date(){ return $('//android.widget.EditText[@content-desc="Expiration Date* input field"]')}

    get security_code(){ return $('//android.widget.EditText[@content-desc="Security Code* input field"]')}
    
    get review_order_btn (){ return $('//android.widget.TextView[@text="Review Order"]')}

    get place_order(){ return $('//android.widget.TextView[@text="Place Order"]')}

    get continue_shopping(){return $('//android.widget.TextView[@text="Continue Shopping"]')}


    get api_calls(){ return $('//android.view.ViewGroup[@content-desc="menu item api calls"]')}

    get eu_dc(){ return $('//android.widget.TextView[@text="EU-DC"]')}

    get us_dc(){return $('//android.widget.TextView[@text="US-DC"]')}

    get codes_401(){return $('//android.widget.TextView[@text="401"]')}

    get codes_404(){return $('//android.widget.TextView[@text="401"]')}

    get sauce_bot_video(){return $('//android.view.ViewGroup[@content-desc="menu item sauce bot video"]')}

    get pause(){return $('//android.widget.TextView[@text=""]')}

    get behind(){return $('//android.widget.TextView[@text=""]')}

    get forward(){return $('//android.widget.TextView[@text=""]')}


    get soundoff(){return $('//android.widget.TextView[@text=""]')}

    
    async login (username, password) {
        
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.login_btn.click();
        await browser.pause(2000);
    }

    async menu(){
        await this.click_hamicon.click()
    }

    async web_view(){
        await this.click_hamicon.click()
        await browser.pause(3000)
        await this.webview.click()
        await browser.pause(3000)
        await this.url_input_field.setValue('www.google.com')
        await this.go_to_site_btn.click()
        await browser.pause(3000)
    }

    async qrscanner(){
        await this.qr_scanner.click()

    }

    async geolocation(){
        await this.geo_location.click()
        await this.start_observing.click()
        await this.stop_observing.click()
        await browser.pause(5000)
    }

    async fingerprint(){
        await browser.pause(3000)
        await this.finger_print.click()
        await this.allow_login.click()
        await browser.pause(3000)
    }

    async cart(){
        await this.product.click()
        await browser.pause(3000)
        await this.addtocart.click()
        await this.cart_icon.click()
        await browser.pause(3000)
        await this.proceed_to_checkout.click()
        await browser.pause(3000)
        
    }

    async abo_ut(){
        await this.about.click()

    }

    async loginNavbar(){

        await this.log_in.click()

    }
   
    

    async checkout(fullname,addressline1,addressline2,city,state_region,zip_code,country){
        await this.fullname.setValue(fullname);
        await this.addressline1.setValue(addressline1)
        await this.addressline2.setValue(addressline2)
        await this.city.setValue(city);
        await this.state_region.setValue(state_region);
        await this.zip_code.setValue(zip_code);
        await this.country.setValue(country)
        await this.payment.click()
    
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new MyDemoApp();
