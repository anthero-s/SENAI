class LcdApi:
    LCD_CLR = 0x01
    LCD_HOME = 0x02

    LCD_ENTRY_MODE = 0x04
    LCD_ENTRY_INC = 0x02

    LCD_ON_CTRL = 0x08
    LCD_ON_DISPLAY = 0x04

    LCD_MOVE = 0x10

    LCD_FUNCTION = 0x20
    LCD_FUNCTION_2LINES = 0x08

    LCD_CGRAM = 0x40
    LCD_DDRAM = 0x80

    def __init__(self, num_lines, num_columns):
        self.num_lines = num_lines
        self.num_columns = num_columns
        self.clear()

    def clear(self):
        self.hal_write_command(self.LCD_CLR)

    def move_to(self, x, y):
        addr = x & 0x3F
        if y == 1:
            addr += 0x40
        self.hal_write_command(self.LCD_DDRAM | addr)

    def putchar(self, char):
        self.hal_write_data(ord(char))

    def putstr(self, string):
        for char in string:
            self.putchar(char)