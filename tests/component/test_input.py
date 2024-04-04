from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome()
driver.get("localhost:3000/login")
input_username = driver.find_elements(By.TAG_NAME, 'input')
print('start')
if input_username is None:
   print("Элемент не найден")
else:
   print("Элемент найден")
print('end')