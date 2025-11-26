import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const categories = [
    { id: 'all', name: 'Все категории', icon: 'LayoutGrid' },
    { id: 'dress', name: 'Платья', icon: 'Shirt' },
    { id: 'suit', name: 'Костюмы', icon: 'User' },
    { id: 'coat', name: 'Пальто', icon: 'Wind' },
    { id: 'shirt', name: 'Рубашки', icon: 'ShoppingBag' },
  ];

  const fabrics = [
    { name: 'Шёлк', price: '3000₽/м', image: 'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?w=400&h=300&fit=crop', description: 'Премиум натуральный шёлк' },
    { name: 'Шерсть', price: '2500₽/м', image: 'https://images.unsplash.com/photo-1558769132-cb1aea279762?w=400&h=300&fit=crop', description: 'Итальянская шерсть' },
    { name: 'Хлопок', price: '1500₽/м', image: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3229?w=400&h=300&fit=crop', description: 'Премиум хлопок' },
    { name: 'Лён', price: '2000₽/м', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=300&fit=crop', description: 'Льняное полотно' },
    { name: 'Велюр', price: '2800₽/м', image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop', description: 'Роскошный велюр' },
    { name: 'Кашемир', price: '5000₽/м', image: 'https://images.unsplash.com/photo-1558769132-cb1aea279762?w=400&h=300&fit=crop', description: 'Элитный кашемир' },
  ];

  const services = [
    {
      title: 'Индивидуальный пошив',
      description: 'Создание одежды по вашим меркам и пожеланиям',
      price: 'от 15000₽',
      icon: 'Scissors',
      features: ['Снятие мерок', 'Выбор ткани', 'Примерки', 'Корректировка']
    },
    {
      title: 'Дизайнерские модели',
      description: 'Эксклюзивные авторские коллекции',
      price: 'от 30000₽',
      icon: 'Sparkles',
      features: ['Уникальный дизайн', 'Премиум ткани', 'Ручная работа', 'Консультация дизайнера']
    },
    {
      title: 'Доставка',
      description: 'Доставим готовое изделие к вам домой или в офис',
      price: 'Бесплатно',
      icon: 'Truck',
      features: ['По Ростову-на-Дону', 'По области', 'Примерка при получении', 'Гарантия качества']
    },
  ];

  const portfolio = [
    { image: 'https://cdn.poehali.dev/projects/67800ec5-b419-45c6-b1fd-81600f388e3b/files/f0b26b8c-417c-48c9-938b-c2b52d2c3742.jpg', title: 'Вечернее платье', category: 'dress' },
    { image: 'https://cdn.poehali.dev/projects/67800ec5-b419-45c6-b1fd-81600f388e3b/files/c6fb2c6a-3b46-4816-ba7f-2da3f22623e5.jpg', title: 'Деловой костюм', category: 'suit' },
    { image: 'https://cdn.poehali.dev/projects/67800ec5-b419-45c6-b1fd-81600f388e3b/files/2d018371-13e5-403b-8e0e-52fb42fdaf09.jpg', title: 'Коктейльное платье', category: 'dress' },
    { image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop', title: 'Пальто', category: 'coat' },
    { image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop', title: 'Рубашка на заказ', category: 'shirt' },
    { image: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=800&fit=crop', title: 'Летнее платье', category: 'dress' },
  ];

  const priceList = [
    { service: 'Платье простое', price: '15000₽' },
    { service: 'Платье вечернее', price: '25000₽' },
    { service: 'Костюм мужской', price: '35000₽' },
    { service: 'Костюм женский', price: '30000₽' },
    { service: 'Пальто', price: '40000₽' },
    { service: 'Рубашка', price: '8000₽' },
    { service: 'Брюки', price: '10000₽' },
    { service: 'Юбка', price: '7000₽' },
    { service: 'Доставка по Ростову', price: 'Бесплатно' },
    { service: 'Доставка по области', price: 'от 500₽' },
  ];

  const faqs = [
    {
      question: 'Как происходит процесс заказа?',
      answer: 'Вы оставляете заявку, мы приглашаем вас на консультацию, снимаем мерки, помогаем выбрать ткань и фасон. Затем проходят 1-2 примерки, после чего доставляем готовое изделие к вам домой.'
    },
    {
      question: 'Сколько времени занимает пошив?',
      answer: 'Обычно 2-3 недели. Срочные заказы возможны за доплату, изготовление за 1 неделю.'
    },
    {
      question: 'Можно ли принести свою ткань?',
      answer: 'Да, вы можете принести свою ткань. Мы оценим её качество и дадим рекомендации по пошиву.'
    },
    {
      question: 'Есть ли гарантия на работу?',
      answer: 'Да, предоставляем гарантию 3 месяца на качество пошива и 1 бесплатную корректировку в течение месяца.'
    },
    {
      question: 'Какая предоплата требуется?',
      answer: 'Предоплата составляет 50% от стоимости заказа. Оставшиеся 50% оплачиваются при получении готового изделия.'
    },
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="relative z-10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scissors" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Semona</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#materials" className="text-sm font-medium hover:text-primary transition-colors">Материалы</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Прайс</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={() => setShowChat(!showChat)}>
            <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
            Чат с менеджером
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">Индивидуальный пошив</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Создаём одежду вашей мечты
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональное ателье с 15-летним опытом. Индивидуальный пошив, доставка на дом, премиум материалы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowMeasurements(!showMeasurements)}>
                <Icon name="Ruler" className="mr-2 h-5 w-5" />
                Оставить мерки
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">
                  <Icon name="Eye" className="mr-2 h-5 w-5" />
                  Посмотреть работы
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр услуг для создания идеальной одежды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог изделий</h2>
            <p className="text-muted-foreground text-lg">Выберите категорию одежды</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} className="h-4 w-4" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Материалы для пошива</h2>
            <p className="text-muted-foreground text-lg">Премиум ткани от лучших производителей</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabrics.map((fabric, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={fabric.image} 
                    alt={fabric.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{fabric.name}</CardTitle>
                      <CardDescription>{fabric.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{fabric.price}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Наши работы говорят сами за себя</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены на наши услуги</p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {priceList.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Итоговая стоимость зависит от сложности работы и выбранных материалов
          </p>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о наших услугах</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-sm text-muted-foreground">г. Ростов-на-Дону, ул. Маршала Жукова, д. 25</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">info@semona.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-sm text-muted-foreground">Пн-Пт: 10:00-20:00<br />Сб-Вс: 11:00-18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем заказе" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {showMeasurements && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Оставить мерки</CardTitle>
                  <CardDescription>Заполните параметры для точного пошива</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowMeasurements(false)}>
                  <Icon name="X" className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal">Личные данные</TabsTrigger>
                  <TabsTrigger value="measurements">Мерки</TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="client-name">Имя</Label>
                    <Input id="client-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="client-phone">Телефон</Label>
                    <Input id="client-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="client-email">Email</Label>
                    <Input id="client-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="category">Категория одежды</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dress">Платье</SelectItem>
                        <SelectItem value="suit">Костюм</SelectItem>
                        <SelectItem value="coat">Пальто</SelectItem>
                        <SelectItem value="shirt">Рубашка</SelectItem>
                        <SelectItem value="pants">Брюки</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="measurements" className="space-y-4 mt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="chest">Обхват груди (см)</Label>
                      <Input id="chest" type="number" placeholder="90" />
                    </div>
                    <div>
                      <Label htmlFor="waist">Обхват талии (см)</Label>
                      <Input id="waist" type="number" placeholder="70" />
                    </div>
                    <div>
                      <Label htmlFor="hips">Обхват бёдер (см)</Label>
                      <Input id="hips" type="number" placeholder="95" />
                    </div>
                    <div>
                      <Label htmlFor="height">Рост (см)</Label>
                      <Input id="height" type="number" placeholder="170" />
                    </div>
                    <div>
                      <Label htmlFor="shoulder">Ширина плеч (см)</Label>
                      <Input id="shoulder" type="number" placeholder="40" />
                    </div>
                    <div>
                      <Label htmlFor="sleeve">Длина рукава (см)</Label>
                      <Input id="sleeve" type="number" placeholder="60" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Дополнительные пожелания</Label>
                    <Textarea id="notes" placeholder="Укажите особенности фигуры или пожелания" rows={3} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Check" className="mr-2 h-4 w-4" />
                    Отправить мерки
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}

      {showChat && (
        <div className="fixed bottom-4 right-4 z-50 w-96 animate-slide-in-right">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Чат с менеджером</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowChat(false)}>
                <Icon name="X" className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-80 overflow-y-auto mb-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">М</div>
                  <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm">Здравствуйте! Чем могу помочь?</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Введите сообщение..." />
                <Button size="icon">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      </div>
      <footer className="border-t py-12 bg-muted/30 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scissors" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Semona</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Индивидуальный пошив и доставка с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Индивидуальный пошив</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Дизайнерские модели</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Доставка на дом</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Прайс-лист</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@semona.ru</li>
                <li>г. Ростов-на-Дону, ул. Маршала Жукова, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Semona. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;