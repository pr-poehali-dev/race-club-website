import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const upcomingRaces = [
    {
      id: 1,
      title: "Гран-при Весенний",
      date: "15 мая 2025",
      location: "Автодром Сочи",
      participants: 24,
      category: "Формула",
      image: "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png"
    },
    {
      id: 2,
      title: "Кубок Скорости",
      date: "22 июня 2025",
      location: "Трек Игора Драйв",
      participants: 18,
      category: "Кольцевые",
      image: "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png"
    },
    {
      id: 3,
      title: "Летний Чемпионат",
      date: "10 июля 2025",
      location: "Moscow Raceway",
      participants: 30,
      category: "Турбо",
      image: "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png"
    }
  ];

  const results = [
    { place: 1, driver: "Алексей Петров", time: "1:42.354", points: 25 },
    { place: 2, driver: "Иван Смирнов", time: "1:42.891", points: 18 },
    { place: 3, driver: "Дмитрий Волков", time: "1:43.102", points: 15 }
  ];

  const gallery = [
    "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png",
    "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png",
    "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png",
    "https://v3b.fal.media/files/b/penguin/vErJNqILWeZBMu1XD6b2A_output.png"
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Заявка принята! Вы зарегистрированы на ${upcomingRaces.find(r => r.id === selectedEvent)?.title}`);
    setFormData({ name: "", email: "", phone: "" });
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Icon name="Flag" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-heading font-bold">Racing Club</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#calendar" className="text-foreground hover:text-primary transition-colors">Календарь</a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">Результаты</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors">Новости</a>
            <a href="#membership" className="text-foreground hover:text-primary transition-colors">Членство</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Вступить в клуб</Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            RACING CLUB
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Скорость. Адреналин. Победа. Присоединяйтесь к сообществу профессиональных гонщиков
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на гонку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Смотреть результаты
            </Button>
          </div>
        </div>
      </section>

      <section id="calendar" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Календарь Гонок</h2>
            <p className="text-muted-foreground text-lg">Предстоящие события и возможность регистрации</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingRaces.map((race) => (
              <Card key={race.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  <img src={race.image} alt={race.title} className="w-full h-full object-cover opacity-50" />
                  <Badge className="absolute top-4 right-4">{race.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Flag" size={20} className="text-primary" />
                    {race.title}
                  </CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {race.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      {race.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      {race.participants} участников
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedEvent(race.id)}>
                        Зарегистрироваться
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Регистрация на {race.title}</DialogTitle>
                        <DialogDescription>Заполните форму для участия в гонке</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleRegistration} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя и фамилия</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Отправить заявку</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Последние Результаты</h2>
            <p className="text-muted-foreground text-lg">Итоги прошедших соревнований</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" size={24} className="text-primary" />
                Гран-при Весенний 2024
              </CardTitle>
              <CardDescription>Автодром Сочи • 28 апреля 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {results.map((result) => (
                  <div
                    key={result.place}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          result.place === 1
                            ? "bg-yellow-500 text-white"
                            : result.place === 2
                            ? "bg-gray-400 text-white"
                            : result.place === 3
                            ? "bg-orange-600 text-white"
                            : "bg-muted"
                        }`}
                      >
                        {result.place}
                      </div>
                      <div>
                        <div className="font-semibold">{result.driver}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Timer" size={14} />
                          {result.time}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{result.points} очков</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Моменты с гоночных треков</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Новости</h2>
            <p className="text-muted-foreground text-lg">Последние события клуба</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((news) => (
              <Card key={news} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Обновление регламента сезона 2025</CardTitle>
                  <CardDescription>15 марта 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Новые правила технического регламента вступят в силу с начала сезона...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Членство</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Станьте частью профессионального гоночного сообщества
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Базовый</CardTitle>
                <div className="text-3xl font-bold mt-4">15 000₽</div>
                <CardDescription>в год</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Доступ на 5 гонок</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Скидки на участие</span>
                </div>
                <Button className="w-full mt-4" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
            <Card className="border-primary shadow-lg">
              <CardHeader>
                <Badge className="w-fit">Популярный</Badge>
                <CardTitle>Профи</CardTitle>
                <div className="text-3xl font-bold mt-4">35 000₽</div>
                <CardDescription>в год</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Безлимитные гонки</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Персональный тренер</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Техподдержка</span>
                </div>
                <Button className="w-full mt-4">Выбрать</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>VIP</CardTitle>
                <div className="text-3xl font-bold mt-4">75 000₽</div>
                <CardDescription>в год</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Всё из Профи</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Приоритетная регистрация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Эксклюзивные события</span>
                </div>
                <Button className="w-full mt-4" variant="outline">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами</p>
          </div>
          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@racingclub.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Москва, Автодромная 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Icon name="Flag" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-heading font-bold">Racing Club</span>
          </div>
          <p className="text-secondary-foreground/80">© 2025 Racing Club. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
