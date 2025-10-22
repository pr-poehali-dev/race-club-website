import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface RaceEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  registrationOpen: boolean;
}

interface Result {
  id: number;
  race: string;
  date: string;
  winner: string;
  time: string;
}

const Index = () => {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<RaceEvent | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: ''
  });

  const upcomingRaces: RaceEvent[] = [
    {
      id: 1,
      title: 'Гран-При Скорости',
      date: '15 декабря 2024',
      location: 'Автодром "Сокол"',
      category: 'Формула',
      registrationOpen: true
    },
    {
      id: 2,
      title: 'Зимний Чемпионат',
      date: '22 декабря 2024',
      location: 'Трасса "Северная"',
      category: 'Ралли',
      registrationOpen: true
    },
    {
      id: 3,
      title: 'Новогодний Спринт',
      date: '29 декабря 2024',
      location: 'Кольцевая трасса',
      category: 'Кросс',
      registrationOpen: true
    }
  ];

  const results: Result[] = [
    {
      id: 1,
      race: 'Осенний Кубок',
      date: '15 ноября 2024',
      winner: 'Алексей Смирнов',
      time: '1:42:35'
    },
    {
      id: 2,
      race: 'Городская Гонка',
      date: '8 ноября 2024',
      winner: 'Мария Петрова',
      time: '2:15:20'
    },
    {
      id: 3,
      race: 'Чемпионат Области',
      date: '1 ноября 2024',
      winner: 'Дмитрий Козлов',
      time: '1:38:12'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
    'https://images.unsplash.com/photo-1471479917193-f00955256257?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80'
  ];

  const handleRegistration = (event: RaceEvent) => {
    setSelectedEvent(event);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Регистрация успешна!',
      description: `Вы зарегистрированы на ${selectedEvent?.title}`,
    });
    setFormData({ name: '', email: '', phone: '', category: '' });
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Flag" className="text-primary-foreground" size={24} />
              </div>
              <span className="font-heading font-bold text-2xl">Racing Club</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#calendar" className="hover:text-primary transition-colors">Календарь</a>
              <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#membership" className="hover:text-primary transition-colors">Членство</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="default" className="hidden md:flex">
              Вступить в клуб
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative bg-secondary text-secondary-foreground py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
              Скорость. Азарт. Победа.
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
              Присоединяйтесь к сообществу гонщиков, где каждая секунда на счету
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="default">
                Зарегистрироваться на гонку
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Календарь гонок</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Предстоящие события сезона. Зарегистрируйтесь и станьте частью гоночного сообщества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingRaces.map((race, index) => (
              <Card key={race.id} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{race.category}</Badge>
                    {race.registrationOpen && (
                      <Badge variant="default" className="bg-green-500">Открыта регистрация</Badge>
                    )}
                  </div>
                  <CardTitle className="font-heading text-2xl">{race.title}</CardTitle>
                  <CardDescription className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={16} />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={16} />
                      <span>{race.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full" 
                        onClick={() => handleRegistration(race)}
                        disabled={!race.registrationOpen}
                      >
                        <Icon name="UserPlus" size={18} className="mr-2" />
                        Зарегистрироваться
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">Регистрация на гонку</DialogTitle>
                        <DialogDescription>
                          {selectedEvent?.title} • {selectedEvent?.date}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя и фамилия</Label>
                          <Input 
                            id="name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
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

      <section id="results" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Результаты гонок</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Последние результаты соревнований и достижения наших участников
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {results.map((result) => (
              <Card key={result.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl mb-2">{result.race}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{result.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Trophy" size={14} />
                          <span>{result.winner}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        <Icon name="Timer" size={16} className="mr-2" />
                        {result.time}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Моменты адреналина, эмоций и побед на наших гонках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Гоночное фото ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Новости клуба</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Последние события, обновления и анонсы
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Новость</Badge>
                <CardTitle className="font-heading text-xl">Открытие нового сезона</CardTitle>
                <CardDescription>5 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Приглашаем всех участников на торжественное открытие зимнего сезона гонок. 
                  Ждём вас 10 декабря на главной трассе клуба.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Обновление</Badge>
                <CardTitle className="font-heading text-xl">Модернизация трассы</CardTitle>
                <CardDescription>28 ноября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Завершены работы по модернизации северного участка трассы. 
                  Новое покрытие и улучшенная система безопасности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Членство в клубе</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий тариф и получите доступ ко всем возможностям клуба
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Базовый</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  5 000 ₽<span className="text-sm font-normal text-muted-foreground">/месяц</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Участие в любительских гонках</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Доступ к тренировочной трассе</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Клубные мероприятия</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2">Популярный</Badge>
                <CardTitle className="font-heading text-2xl">Профи</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  12 000 ₽<span className="text-sm font-normal text-muted-foreground">/месяц</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Все из тарифа Базовый</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Участие в чемпионатах</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Персональный тренер</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Аренда оборудования</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Элит</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-2">
                  25 000 ₽<span className="text-sm font-normal text-muted-foreground">/месяц</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Все из тарифа Профи</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>VIP-зона на мероприятиях</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Техническая поддержка 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-green-500" />
                    <span>Индивидуальные тренировки</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-secondary-foreground/80">
                      г. Москва, Автодром "Сокол"<br />
                      ул. Гоночная, 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-secondary-foreground/80">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-secondary-foreground/80">info@racingclub.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Напишите нам</CardTitle>
                <CardDescription>Ответим на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea 
                      id="message" 
                      className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Racing Club. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
