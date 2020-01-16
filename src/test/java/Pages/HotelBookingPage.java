package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeMethod;
import java.util.concurrent.TimeUnit;



public class HotelBookingPage {

    static WebDriver driver;

    @BeforeMethod
    public static void launchBrowser(){

        //Note ChromeDriver.exe is located in the root of the project
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(400L, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(2000L, TimeUnit.SECONDS);
        driver.get("http://hotel-test.equalexperts.io/");

    }

    public static void verifyHomePage(){

        driver.findElement(By.xpath("//h1[contains(text(),'Hotel booking form')]")).isDisplayed();

    }

    public static void enterFirstname(String Firstname){

        driver.findElement(By.cssSelector("#firstname")).sendKeys(Firstname);

    }
    public static void enterSurname(String Surname){

        driver.findElement(By.cssSelector("#lastname")).sendKeys(Surname);

    }
    public static void enterPrice(String Price){

        driver.findElement(By.cssSelector("#totalprice")).sendKeys(Price);

    }
    public static void enterCheckin(String checkin){

        driver.findElement(By.cssSelector("#checkin")).sendKeys(checkin);
    }
    public static void enterCheckout(String checkout){

        driver.findElement(By.cssSelector("#checkout")).sendKeys(checkout);
    }

    public static void scrollPage() {

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(0, document.body.scrollHeight)");

    }
    public static void clickSave(){

        driver.findElement(By.cssSelector("div:nth-child(3) div.row div.col-md-1:nth-child(7) > input:nth-child(1)")).click();
    }
    public static void clickDeleteButton(){

        driver.findElement(By.cssSelector("input[type^='button'][value='Delete'] ")).click();

    }
    public static void tearDown(){

        driver.close();
    }

}
//scrollPage