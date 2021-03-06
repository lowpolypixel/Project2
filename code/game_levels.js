var GAME_LEVELS = [
  ["                                                               y yy   yyy       ",
   "                              yy                                yy yyyyyyy      ",
   "                       o o o  yy                            yy   vyyyyy y y     ",
   "                       ooooo                                  y      !  !       ",
   "                       ooooo y   y           yyy  y                  !  |       ",
   "       oooo         yyyyyyyyyy             yyyyyy yyy                           ",
   "       oooo        y           y               yyyy          yy   y       |     ",
   "      yy yyy                yy y              !                y  y             ",
   "    yyyyyyyyyy  y     y  o  y  yy                         yy  xxooxx       ooo  ",
   "      yyyyy y y  yyyo    y    oy                 y       y    xxooxx       ooo  ",
   "         v        yyyo o   o o y              y          y    xxooxxxxxxxxxxxx  ",
   "       v         y   y y y y yy yy       yy                   xxooxxxxxxxxxxxx  ",
   "              y       ! ! !             yyyy            y     xx ooo    ooo xx  ",
   "                      ! v ! y          yyyy y          y      xx o o    o o xx  ",
   "                o         !  y    y       !  y!yy!y           xx ooo    ooo xx  ",
   "             xxxoxxx          y               yyyy!           xxxxxxxooxxxxxxx  ",
   "             x     x         xxooxx!!!!!x !   yy  !           xx ooo    ooo xx  ",
   "             x     x         xx yxxxxxxxx         !           xx ooo    ooo xx  ",
   "           xxx     x         xx        xx    !                xxooxxxxxxxxxxxx  ",
   "             x     x         xx        xx         !           xx ooo    ooo xx  ",
   "    @        x     o         oxxxx   ooxx  !                  xx o o    o o xx  ",
   "  xxxxx      x     o   o o   o        xxx                     oo ooo    ooo xx  ",
   "  xxxxx   xxxx     o  x   x  o         xx    !    !         y oo           kxx  ",
   "  xxxxx      xxxxxxx  x!!!x  xxxxxxx!!!xx                    yxxxxxxxxxxxxxxxx  "],
  ["    yy    yy    yy    yy    yy    yy y  yy    yy    yy    yy    y       y    yy    yy    yy    yy    yy    yy     ",
   "y  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy    y     y    yyyy  yyyy  yyyy  yyyy  yyyy  yyyy    ",
   "                                                                  y   k                                           ",
   " yy    yy                                 yyy    yy    yy    yy  xx   xx  yy    yy    yy    yy    yy    yy    yy  ",
   "yyyy  yyyy                   yy           yyyy  yyyy  yyyy  yyyy x  =  x yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy ",
   "                         yyyy   yyy       y                      xx  yxx                                          ",
   "                                   xxx oo xxx       y             x   x      yy    yy    yy    yy    yy    yy     ",
   "                                   x!! oo !!x        yy           x   x     yyyy  yyyy  yyyy  yyyy  yyyy  yyyy    ",
   "                   yy              xxx oo xxx     y yyyy          x   x                                           ",
   "                  yyyy               x oo x        y              x   x   yy    yy    yy    yy    yy    yy    yy  ",
   "                                     x oo x       y               x  yx  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy ",
   "                                    xx oo xx   xxxxx              x   x ooooooooooooooooooooooooooooo             ",
   "                          yy        xv oo vx   x!!!x              x   x ooooooooooooooooooooooooooooo             ",
   "                         yyyy       x  oo  x   xx!xx              x   x ooooooooooooooooooooooooooooo             ",
   "                                    x  oo  x    xvx               x   x                                           ",
   "                                   xx  oo  xxxxxx xxxxxxxxxxxxxxxxxy  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx y          ",
   "                   yy              x                     x ooooooo                                   x y          ",
   "                  yyyy             x               oooo  x ooooooo  t                                             ",
   "                                   x               oooo  x ooooooo xx o o o o o o o o o o o o o o o o  y    y     ",
   "                                   x                     x   ==     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyy          ",
   "                          yy       x                |    x                     x                     x            ",
   "                         yyyy      x              x  |   x                 oooo                                  y",
   "                                   xxoxxxxxxxx!!!!xxxxxxxx xxxxxxxxxxx     oooo                                   ",
   "                                   xxoxxxxxxxxxxxxxxxxxxxx x   x     x    xxxxxx           s        yx            ",
   "                   yy              x                     xxx   x     x         x                     x          y ",
   "                  yyyy             x                     o   x x     x         x                     x            ",
   "                                   x            yyyy     o   x xx xx x  x  xxxxx!yyyy     yyy     yy!xyyy    y    ",
   "     @                             x yyy   o   y  y      xxxxx    x     x   ooox!!yy!!!!!!y!!!!!!!y!!x y          ",
   "!!xxxxxxxx       x                 x yy    y          yyyx!!!x    x     x   ooox!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!",
   "!xxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!x!!!xxxxxxxxxx!x!xxxxxx!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!"],
  ["     yy    yy    yy    yy    yy    yy    yy    yy    yy    yy   yyyyyyyyy  y yy |  yy    yy    yy v  yy    yy    y",
   "y   yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy  yyyy   yyyyy       yy    yy    yy    yy    yy    yy   yy",
   "                                                                  yyyy@                     y           |         ",
   " yy    yy    yy                           yyy    yy    yy     yy xxyyyxx  yy oo yy    yy   y y    yy    yy    yy  ",
   "yyyy  yyyy  yyyy          oo yy           yyyy  yyyy  yyyy   yyyyxxxxxxx yyy|oo yyy  yyyy  y y    yyy  yyyy  yyyy ",
   "                yy       yyyy   yyy       y                      xxxxxxx       |    |       |               |     ",
   "               yyyy                xxx oo xxx  yy    yy    yy    yxxxxxyy    yy oo  y    yy    yy|oo !!    yy    y",
   "          yy       oo              x!! oo !!x yyyy  yyyy  yyyy  yyxxxxxyyy  yyyyoo|yyy  yyyy  yyyyoo!!!!  yyyy  yy",
   "         yyyy      yy          yy  xxx oo xxx     y               xxxxxv   |          |!                          ",
   "                  yyyy        yyyy   x oo x        y          yy  xxxxx   yy    y  oo yy oo  y!oo yy!  |!!|   !!| ",
   " ooooooooooo  yy              v      x oo x       y          yyyy xxxxx  yyyy  yyyyooyyyyooyyyyooyyyy  !!!!  !!!! ",
   " ooooooooooo yyyy         oo    yy  xxyoo xx   xxxxx              xxxxx                    y                      ",
   " ooooooooooo              yy   yyyy xv oo vx   x!!!x              xxxxx                   y                       ",
   " ooooooooooo    yy       yyyy       x  oo  x   xx!xx              xxxxx   yy ==                                 ==",
   " ooooooooooo   yyyy                 x  oo  x    xvx               xxxxx    y====                              ====",
   "                   oo              xx  oo  xxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxxxxxxxxxxxxxyyy   y     ",
   " oo y        yy    yy       yy     x                     xv        xxxxxxxx!x      |       |       | xyy          ",
   " oo yy      yyyy  yyyy     yyyy    x               oooo  x         xxxxxxxxv   |   o   o   o   o   o        y     ",
   " oo   oo                       yy  x               oooo  x                x o o o o o o|o o o o|o o o       y     ",
   " oo   yy        yy        oo  yyyy x                  |  x              ==x xxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyy     ",
   " oo  yyyy      yyyy       oo       x                |    x==                   x v  v  v  v  v  v  v    yy y     o",
   " oo      oo      |        oo       x    t         x  |   x  s                                                    y",
   "  oo     yy               yy       xooxxxxxxxx!!!!xxxxxx   xxxxxxxxxxx         y ooooooooooooooooooooo            ",
   "    oo  yyyy oo    oo    yyyy      xooxxxxxxxxxxxxxxxxxx   xyyyx ooo x!!!xxxxxxxy  y              y yx          oo",
   "    oo       yy    yy              xy                   xxxxyyyx ooo x!!!   oooooo y    y     y      x          yy",
   "            yyyy  yyyy             x             oo      oooo  x ooo x!!!   oooooo y y    y          x       o   y",
   "                   yyyyy           x oo        yyyy     oooo  xx xx xyyx  xxxxxyyy!!!!!!!!!!!!!!!!!!xyyy !   y  !!",
   "     k                             xyyyy   o   y  y      xxxxx    x oooooo !!!!x!!!!!!!!!!!!!!!!!!!!!x!y!!!!!!!!!!",
   "  xxxxxxxx       x     x           x yy    y          yyyx!!!x    x oooooo !!!!x!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!x!!!xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!"],
  ["yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
   "y                   oooooo  oo  oo   oooo   oo   oo  oo  oo    oo    oo    oooo    oo    oo                  y",
   "y                   oooooo  oo  ooy oooooo yooo  ooy oo oo  y   oo  oo   yoo  oo   oo    oo                  y",
   "y                     oo    oooooo  oo  oo  oooo oo  oooo  yyy   oooo    oo   yoo  oo    oo                  y",
   "y                  yy oo    oooooo  oooooo  oo oooo  oooo         oo  yy oo  yyoo  oo yy oo                  y",
   "y                 yyyyoo y  oo  oo yoo  ooy oo  ooo yoo oo    y   oo yyyy oo  oo    oo  oo                   y",
   "y                y   yooy y oo  ooyyoo  ooyyoo   ooyyoo  oo  yyy  oo       oooo  yy  oooo                    y",
   "y                                                                                                            y",
   "y @                                                                                                          y",
   "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yy",
   "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yy",
   "yyyyy   yyyyy  yyyyyy    yyyyy     yyy         yyyy   yyyyy  yyyyyy    yyyyy     yyyyyyyyy             yyyy yy",
   "y            oooooo    oooo    oooooo     oooooo  oo       oooo   oo    oo  oo  oo   oo   oooooo            yy",
   "y            oooooo   oo  oo   oo   oo    oo  oo  oo      oooooo   oo  oo   oo  ooo  oo  ooooooo            yy",
   "y         yy ooyy    oo    oo  ooooooo    oooooo  oo    y oo  oo    oooo    oo  oooo oo  oo                 yy",
   "y        yyyyooooo   oo    oo  oooooo     oooo    oo    yyoooooo     oo     oo  oo oooo  ooyyoooo           yy",
   "y            ooooo    ooyyoo   oo   oo yy oo  yy  oooooo  oo  oo     oo     oo  oo  ooo  oooooooo   yy      yy",
   "y            oo   yyy  ooooy   oo yyoo    oo  yyy oooooo  ooyyoo     oo yy  oo  oo y oo  oooooooy  yyy  s   yy",
   "y                                                 yyy           yy   yy     yyyy  yyyy    yyyy            y yy",
   "y                                                               y            yy yy         yy             yyyy",
   "y                                                                                                          yyy",
   "y                                                                                                            y",
   "y yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
   "y  yyyy   yyyyy  yyyyyy    yyyyy     yyy         yyyy   yyyyy  yyyyyy    yyyyy     yyyyyyyyy             yyyyy",
   "y                                                                                             oo     oo      y",
   "y                        oo    oo  oo    oo     oooooo     oo    oo    oo  oooooo  oo         oo     oo      y",
   "y                        ooo  ooo   oo  oo     ooooooo   oooooo  ooo  ooo  oooooo  oo      oo     k     oo   y",
   "y                        oooooooo yy oooo  yyy oo        oo  oo  oooooooo  ooooo   oo      oo    yyy    oo   y",
   "y                        oo oo oo yyy oo  yyyy ooyyoooo  oooooo  oo oo oo  ooooo   oo      ooo  yyyyy   oo   y",
   "y                      yyoo yy oo     oo       ooooooooy ooy oo  oo    oo  oooooo           ooooooooooooo    y",
   "y                     yyyooyyyyoo     oo       oooooooyy ooyyoo  oo    oo  oooooo  oo        ooooooooooo     y",
   "y                                                                                                            y",
   "y                                                                                      t                     y",
   "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
