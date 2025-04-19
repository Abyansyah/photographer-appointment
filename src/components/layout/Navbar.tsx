import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/auth/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MenuType } from '@/types/menu';
import { cn } from '@/lib/utils';
import { ListMenu } from '@/constant/menu';

export function Navbar() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={cn('sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b-[0.2px] md:supports-[backdrop-filter]:bg-background/60')}>
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">FotoKu</span>
          </Link>
          <ul className="hidden md:flex items-center gap-10 text-card-foreground">
            {ListMenu.map((item: MenuType, index: number) => (
              <li key={index} className="relative">
                <Link to={item.href || '/'} className={`${isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground'} hover:text-primary transition-colors`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={'https://github.com/shadcn.png'} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                  <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-500 focus:bg-red-500 focus:text-white cursor-pointer">
                    <LogOut />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => navigate('/login')}>Login</Button>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex-1 py-4">
                  <nav className="grid gap-2">
                    {ListMenu.map((item: MenuType, index: number) => (
                      <SheetClose asChild key={index}>
                        <Link to={item.href || '/'} className={`flex items-center px-4 py-2 rounded-lg ${isActive(item.href) ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="border-t pt-4">
                  {user ? (
                    <>
                      <div className="px-4 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{user?.name}</span>
                          <span className="text-xs text-muted-foreground">{user?.email}</span>
                        </div>
                      </div>
                      <Button variant="destructive" onClick={logout} className="w-full mt-4 ">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <SheetClose asChild>
                      <Button onClick={() => navigate('/login')} className="w-full">
                        Login
                      </Button>
                    </SheetClose>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
