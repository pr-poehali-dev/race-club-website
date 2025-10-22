import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membershipDialogOpen, setMembershipDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const upcomingRaces = [
    {
      id: 1,
      title: "Гран-При Этап 1",
      date: "15 ноября 2024",
      time: "14:00",
      location: "Автодром Сочи",
      category: "Формула",
      slots: 12
    },
    {
      id: 2,
      title: "Спринт-Гонка",
      date: "22 ноября 2024",
      time: "16:00",
      location: "Казань Ринг",
      category: "GT",
      slots: 8
    },
    {
      id: 3,
      title: "Зимний Кубок",
      date: "6 декабря 2024",
      time: "13:00",
      location: "Московский Рейсвей",
      category: "Дрифт",
      slots: 15
    },
    {
      id: 4,
      title: "Ночная Гонка",
      date: "20 декабря 2024",
      time: "20:00",
      location: "Нижегородское Кольцо",
      category: "Эндуранс",
      slots: 10
    }
  ];

  const raceResults = [
    {
      position: 1,
      driver: "Алексей Петров",
      team: "Red Speed Racing",
      time: "1:32.456",
      points: 25
    },
    {
      position: 2,
      driver: "Дмитрий Соколов",
      team: "Velocity Motors",
      time: "1:32.891",
      points: 18
    },
    {
      position: 3,
      driver: "Иван Морозов",
      team: "Thunder Racing",
      time: "1:33.124",
      points: 15
    },
    {
      position: 4,
      driver: "Сергей Волков",
      team: "Storm Team",
      time: "1:33.567",
      points: 12
    },
    {
      position: 5,
      driver: "Михаил Кузнецов",
      team: "Fast Track",
      time: "1:33.892",
      points: 10
    }
  ];

  const gallery = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/65ec387b-83e6-49b9-84a1-841a0651c6e3.jpg",
      title: "Гран-При 2024"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/a7ca2525-8cb6-46c7-992f-6726244b1e13.jpg",
      title: "Победители сезона"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/ea01bd7b-b1f7-4035-baf7-9a8f63b5084e.jpg",
      title: "Трасса с высоты"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Flag" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold">Racing Club</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#calendar" className="text-foreground hover:text-primary transition-colors">
                Календарь
              </a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors">
                Результаты
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                Галерея
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Стать членом</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Членство в Racing Club</DialogTitle>
                    <DialogDescription>
                      Заполните форму для вступления в клуб
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="desktop-member-name">Имя и фамилия</Label>
                      <Input id="desktop-member-name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="desktop-member-email">Email</Label>
                      <Input id="desktop-member-email" type="email" placeholder="ivan@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="desktop-member-phone">Телефон</Label>
                      <Input id="desktop-member-phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="desktop-member-experience">Опыт вождения</Label>
                      <Input id="desktop-member-experience" placeholder="Опишите ваш опыт" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <a 
                    href="#calendar" 
                    className="text-lg py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Календарь
                  </a>
                  <a 
                    href="#results" 
                    className="text-lg py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Результаты
                  </a>
                  <a 
                    href="#gallery" 
                    className="text-lg py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Галерея
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4">
                        Стать членом
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Членство в Racing Club</DialogTitle>
                        <DialogDescription>
                          Заполните форму для вступления в клуб
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobile-member-name">Имя и фамилия</Label>
                          <Input id="mobile-member-name" placeholder="Иван Иванов" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile-member-email">Email</Label>
                          <Input id="mobile-member-email" type="email" placeholder="ivan@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile-member-phone">Телефон</Label>
                          <Input id="mobile-member-phone" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile-member-experience">Опыт вождения</Label>
                          <Input id="mobile-member-experience" placeholder="Опишите ваш опыт" />
                        </div>
                        <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Отправить заявку</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/65ec387b-83e6-49b9-84a1-841a0651c6e3.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6">
            Racing Club
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Почувствуй адреналин гонок. Присоединяйся к профессиональным соревнованиям.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="text-base sm:text-lg">
              Записаться на гонку
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="calendar" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Календарь гонок
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Предстоящие события и возможность регистрации на соревнования
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingRaces.map((race) => (
              <Card key={race.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{race.title}</CardTitle>
                    <Badge variant="secondary">{race.category}</Badge>
                  </div>
                  <CardDescription className="text-base">{race.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Calendar" size={18} className="text-primary" />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>{race.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span>Осталось мест: {race.slots}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full mt-4" 
                          onClick={() => setSelectedEvent(race.title)}
                        >
                          Зарегистрироваться
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Регистрация на гонку</DialogTitle>
                          <DialogDescription>
                            {race.title} • {race.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя и фамилия</Label>
                            <Input id="name" placeholder="Иван Иванов" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="ivan@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" placeholder="+7 (999) 123-45-67" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Опыт вождения</Label>
                            <Input id="experience" placeholder="Начинающий / Опытный / Профессионал" />
                          </div>
                          <Button className="w-full">Отправить заявку</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Результаты гонок
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Итоги последних соревнований и турнирная таблица
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="latest" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="latest">Последняя гонка</TabsTrigger>
                <TabsTrigger value="season">Сезон 2024</TabsTrigger>
                <TabsTrigger value="all">Все время</TabsTrigger>
              </TabsList>
              <TabsContent value="latest">
                <Card>
                  <CardHeader>
                    <CardTitle>Гран-При Осень 2024</CardTitle>
                    <CardDescription>30 октября 2024 • Автодром Сочи</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {raceResults.map((result) => (
                        <div 
                          key={result.position}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              result.position === 1 ? 'bg-yellow-400 text-yellow-900' :
                              result.position === 2 ? 'bg-gray-300 text-gray-900' :
                              result.position === 3 ? 'bg-orange-400 text-orange-900' :
                              'bg-muted text-foreground'
                            }`}>
                              {result.position}
                            </div>
                            <div>
                              <div className="font-semibold">{result.driver}</div>
                              <div className="text-sm text-muted-foreground">{result.team}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <div className="font-mono font-semibold">{result.time}</div>
                              <div className="text-sm text-muted-foreground">Время</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-primary">{result.points}</div>
                              <div className="text-sm text-muted-foreground">Очки</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="season">
                <Card>
                  <CardHeader>
                    <CardTitle>Турнирная таблица сезона 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Статистика сезона загружается...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>Рекорды всех времён</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Исторические результаты загружаются...
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Галерея
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Лучшие моменты наших гонок
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="ZoomIn" className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="font-semibold">{photo.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Посмотреть все фото
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Стань частью команды
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
              Присоединяйся к Racing Club и участвуй в профессиональных гонках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full sm:w-auto">
                    Оформить членство
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Членство в Racing Club</DialogTitle>
                    <DialogDescription>
                      Заполните форму для вступления в клуб
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="footer-member-name">Имя и фамилия</Label>
                      <Input id="footer-member-name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="footer-member-email">Email</Label>
                      <Input id="footer-member-email" type="email" placeholder="ivan@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="footer-member-phone">Телефон</Label>
                      <Input id="footer-member-phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="footer-member-experience">Опыт вождения</Label>
                      <Input id="footer-member-experience" placeholder="Опишите ваш опыт" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <Icon name="Flag" className="text-white" size={20} />
                </div>
                <span className="text-xl font-heading font-bold">Racing Club</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональный гоночный клуб с многолетней историей
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#calendar" className="hover:text-primary transition-colors">Календарь</a></li>
                <li><a href="#results" className="hover:text-primary transition-colors">Результаты</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@racingclub.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Гоночная, 1</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Racing Club. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={membershipDialogOpen} onOpenChange={setMembershipDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Стать членом Racing Club</DialogTitle>
            <DialogDescription>
              Заполните форму для оформления членства в нашем клубе
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="member-name">Имя и фамилия</Label>
              <Input id="member-name" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="member-email">Email</Label>
              <Input id="member-email" type="email" placeholder="ivan@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="member-phone">Телефон</Label>
              <Input id="member-phone" placeholder="+7 (999) 123-45-67" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="member-experience">Опыт вождения</Label>
              <Input id="member-experience" placeholder="Начинающий / Опытный / Профессионал" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="member-car">Марка автомобиля</Label>
              <Input id="member-car" placeholder="BMW M3" />
            </div>
            <Button className="w-full">Отправить заявку</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;