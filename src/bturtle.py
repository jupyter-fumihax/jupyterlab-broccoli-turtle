# JupyterLab-Broccli-Turtle 

from math import *
from time import *
from PIL  import Image, ImageDraw
from IPython.display import display, clear_output


class BTurtle:

    def __init__(self, xs, ys):
        self.init(xs, ys)


    def init(self, xs, ys):
        self.xs   = xs
        self.ys   = ys
        self.spd  = 2
        self.lwdt = 2
        self.lclr = (0, 0, 0)
        self.bclr = (240, 240, 240)
        self.th   = 0       # angle
        self.cos  = 1       # sin(th)
        self.sin  = 0       # cos(th)
        self.xx   = self.xs/2
        self.yy   = self.ys/2
        self.pend = True       
        self.img  = Image.new('RGB', (self.xs, self.ys), self.bclr)
        self.draw = ImageDraw.Draw(self.img)
        self.show()


    def show(self):
        clear_output(True)
        display(self.img)
        sleep(0.01)
        

    def forward(self, dst):
        dt = self.spd * 5
        nx = self.xx 
        ny = self.yy            
        #
        nn = 1
        rr = dt;
        while (rr<dst):
            ox = nx            
            oy = ny            
            nx = self.xx + rr * self.cos 
            ny = self.yy + rr * self.sin            
            if (self.pend): 
                self.draw.line((ox, oy, nx, ny), self.lclr, self.lwdt)  
                self.show()
            # for next step
            nn += 1
            rr = nn * dt
        #
        ox = nx
        oy = ny
        nx = self.xx + dst * self.cos 
        ny = self.yy + dst * self.sin            
        if (self.pend): 
            self.draw.line((ox, oy, nx, ny), self.lclr, self.lwdt)  
            self.show()
        self.xx = nx
        self.yy = ny            


    def turn_right(self, angle):
        self.th += angle
        self.cos = cos(radians(self.th))
        self.sin = sin(radians(self.th))


    def turn_left(self, angle):
        self.th -= angle
        self.cos = cos(radians(self.th))
        self.sin = sin(radians(self.th))
    

    def move(self, xx, yy):
        if (self.pend): 
            oc = self.cos
            os = self.sin
            dx = xx - self.xx
            dy = yy - self.yy
            ds = sqrt(dx*dx + dy*dy)
            if (ds > 0.0):
                self.cos = dx/ds
                self.sin = dy/ds
                self.forward(ds)
                self.draw.line((self.xx, self.yy, xx, yy), self.lclr, self.lwdt)  
                self.show()
            self.cos = oc
            self.sin = os
        #
        self.xx = xx
        self.yy = yy
                

    def pen_up(self):
        self.pend = False

    
    def pen_down(self):       
        self.pend = True


    def speed(self, spd):
        self.spd = spd


    def line_width(self, lwdt):
        self.lwdt = lwdt


    def line_hsv(self, hh, ss, vv):
        hh = hh%360
        if (hh<0): hh = hh + 360
        if (ss<0.0):   ss = 0.0 
        elif (ss>1.0): ss = 1.0
        if (vv<0.0):   vv = 0.0 
        elif (vv>1.0): vv = 1.0
        #
        aa = vv
        bb = vv - vv*ss
        if (hh>=0 and hh<60):
            rc = aa
            gc = (hh/60)*(aa - bb) + bb
            bc = bb
        elif (hh>=60 and hh<120):
            rc = (120 - hh)/60*(aa - bb) + bb
            gc = aa
            bc = bb
        elif (hh>=120 and hh<180):
            rc = bb
            gc = aa
            bc = (hh - 120)/60*(aa - bb) + bb
        elif (hh>=180 and hh<240):
            rc = bb
            gc = (240 - hh)/60*(aa - bb) + bb
            bc = aa
        elif (hh>=240 and hh<300):
            rc = (hh - 240)/60*(aa - bb) + bb
            gc = bb
            bc = aa
        else:           # hh>=300 and hh<360
            rc = aa
            gc = bb
            bc = (360 - hh)/50*(aa - bb) + bb
        #
        self.lclr = (int(rc*255), int(gc*255), int(bc*255))
        

    def line_color(self, cc):
        self.lclr = cc
        

