import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const upcomingRaces = [
    {
      id: 1,
      title: "Гран-при Серебряного кольца",
      date: "15 ноября 2024",
      location: "Автодром Серебряное кольцо",
      category: "Формула",
      status: "Открыта регистрация"
    },
    {
      id: 2,
      title: "Зимний спринт-чемпионат",
      date: "3 декабря 2024",
      location: "Трасса Нижний Новгород",
      category: "Кольцевые гонки",
      status: "Скоро"
    },
    {
      id: 3,
      title: "Новогодний турбо-вызов",
      date: "22 декабря 2024",
      location: "Казань Ринг",
      category: "Дрифт",
      status: "Открыта регистрация"
    }
  ];

  const raceResults = [
    { position: 1, driver: "Алексей Иванов", team: "Speed Masters", time: "1:42.305", points: 25 },
    { position: 2, driver: "Дмитрий Петров", team: "Racing Legends", time: "1:42.891", points: 18 },
    { position: 3, driver: "Сергей Смирнов", team: "Turbo Force", time: "1:43.124", points: 15 },
    { position: 4, driver: "Михаил Козлов", team: "Speed Masters", time: "1:43.567", points: 12 },
    { position: 5, driver: "Павел Волков", team: "Pro Racing", time: "1:44.012", points: 10 }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/0bfb4929-271b-4d20-9e45-07963bfa6641.jpg",
      title: "Автодром с высоты"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/854965db-64be-4e6a-a6fd-17ac24b23dde.jpg",
      title: "Гонка в действии"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/1e238851-b2e8-43b2-a8e4-627a6f34c477.jpg",
      title: "Награждение победителей"
    }
  ];

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Регистрация успешно отправлена! Мы свяжемся с вами в ближайшее время.");
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Flag" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold">Racing Club</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#calendar" className="text-foreground hover:text-primary transition-colors">Календарь</a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors">Результаты</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#membership" className="text-foreground hover:text-primary transition-colors">Членство</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Присоединиться</Button>
          </div>
        </div>
      </nav>

      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/4f560985-2e2c-4b0d-896a-9f02d2c11a65/files/0bfb4929-271b-4d20-9e45-07963bfa6641.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-6xl font-heading font-bold mb-6 animate-fade-in">Racing Club</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу профессиональных гонщиков. 
            Участвуйте в захватывающих гонках и развивайте свои навыки на лучших трассах.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Узнать больше
            <Icon name="ChevronRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="calendar" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Календарь гонок</h2>
            <p className="text-muted-foreground text-lg">Предстоящие мероприятия и соревнования</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingRaces.map((race) => (
              <Card key={race.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={race.status === "Открыта регистрация" ? "default" : "secondary"}>
                      {race.status}
                    </Badge>
                    <Icon name="Calendar" size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{race.title}</CardTitle>
                  <CardDescription>{race.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Icon name="Clock" size={16} className="mr-2 text-muted-foreground" />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                      <span>{race.location}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full mt-4" 
                          disabled={race.status !== "Открыта регистрация"}
                          onClick={() => setSelectedEvent(race.title)}
                        >
                          Зарегистрироваться
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Регистрация на гонку</DialogTitle>
                          <DialogDescription>{selectedEvent}</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleRegistration} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Имя и фамилия</Label>
                            <Input id="name" placeholder="Введите ваше имя" required />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="your@email.com" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                          </div>
                          <div>
                            <Label htmlFor="experience">Опыт вождения</Label>
                            <Input id="experience" placeholder="Например: 5 лет" required />
                          </div>
                          <Button type="submit" className="w-full">Отправить заявку</Button>
                        </form>
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
            <h2 className="text-4xl font-heading font-bold mb-4">Результаты последней гонки</h2>
            <p className="text-muted-foreground text-lg">Гран-при Осеннего спринта • 20 октября 2024</p>
          </div>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Место</TableHead>
                    <TableHead>Гонщик</TableHead>
                    <TableHead>Команда</TableHead>
                    <TableHead>Время</TableHead>
                    <TableHead className="text-right">Очки</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {raceResults.map((result) => (
                    <TableRow key={result.position}>
                      <TableCell className="font-bold">
                        <div className="flex items-center">
                          {result.position === 1 && <Icon name="Trophy" className="text-yellow-500 mr-2" size={20} />}
                          {result.position === 2 && <Icon name="Medal" className="text-gray-400 mr-2" size={20} />}
                          {result.position === 3 && <Icon name="Award" className="text-orange-600 mr-2" size={20} />}
                          {result.position > 3 && <span className="mr-2">{result.position}</span>}
                          {result.position <= 3 && result.position}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{result.driver}</TableCell>
                      <TableCell>{result.team}</TableCell>
                      <TableCell className="font-mono">{result.time}</TableCell>
                      <TableCell className="text-right font-bold">{result.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Лучшие моменты наших гонок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-heading font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Членство в клубе</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий тариф</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Базовый</CardTitle>
                <CardDescription>Для новичков</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">15 000₽</span>
                  <span className="text-muted-foreground">/год</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Доступ к тренировкам</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>2 гонки в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Базовая экипировка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Популярный</Badge>
              <CardHeader>
                <CardTitle>Профессионал</CardTitle>
                <CardDescription>Для опытных гонщиков</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">35 000₽</span>
                  <span className="text-muted-foreground">/год</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Безлимитные тренировки</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Все гонки сезона</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Полная экипировка</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Персональный тренер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>VIP</CardTitle>
                <CardDescription>Максимум возможностей</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">75 000₽</span>
                  <span className="text-muted-foreground">/год</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Все из Профессионал</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>VIP-зоны на гонках</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Приоритетная запись</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={20} />
                    <span>Эксклюзивные мероприятия</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Есть вопросы?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения дополнительной информации о членстве и участии в гонках
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={20} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={20} />
              <span>info@racingclub.ru</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" className="mr-2" size={20} />
              <span>Москва, ул. Гоночная, 1</span>
            </div>
          </div>
          <Button size="lg" variant="secondary">
            Написать нам
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Racing Club. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
