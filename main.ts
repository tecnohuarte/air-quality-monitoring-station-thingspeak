OLED.init(128, 64)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("HUAWEI P30 lite", "ulises2020")
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Dust (ug/m3): ")
    OLED.writeNumNewLine(Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "9X9L42A97QE40NSS",
    Environment.ReadDust(DigitalPin.P13, AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
    basic.pause(30000)
})
