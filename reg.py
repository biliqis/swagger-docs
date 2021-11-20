import re

phone_reg=r'(\d{3})\D*(\d{3})\D*(\d{4})\D*(\d*)$'
phone="+1781-279-6570"

phone_arr=re.search(phone_reg, phone)

print(phone_arr)