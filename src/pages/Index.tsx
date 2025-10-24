import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WinNotification from '@/components/WinNotification';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredLotteries = [
    {
      id: 1,
      name: 'Золотая удача',
      price: 100,
      maxPrize: 1000000,
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/79f85519-badf-4d43-bb51-6b2a9db0fedf.jpg',
      popular: true,
    },
    {
      id: 2,
      name: 'Мгновенный миллион',
      price: 200,
      maxPrize: 5000000,
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/16fee87e-fa76-471c-a432-0652b6c7cc6a.jpg',
      popular: false,
    },
    {
      id: 3,
      name: 'Счастливый билет',
      price: 50,
      maxPrize: 500000,
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/16fee87e-fa76-471c-a432-0652b6c7cc6a.jpg',
      popular: false,
    },
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Мгновенный результат',
      description: 'Узнайте о выигрыше сразу после покупки',
    },
    {
      icon: 'Shield',
      title: 'Честная игра',
      description: 'Гарантированная прозрачность всех розыгрышей',
    },
    {
      icon: 'Trophy',
      title: 'Крупные призы',
      description: 'Выигрыши от 100₽ до 5 000 000₽',
    },
    {
      icon: 'Bell',
      title: 'Уведомления о выигрышах',
      description: 'Мгновенные оповещения о победах',
    },
  ];

  const recentWinners = [
    { name: 'Анна М.', prize: 250000, lottery: 'Золотая удача' },
    { name: 'Дмитрий П.', prize: 100000, lottery: 'Счастливый билет' },
    { name: 'Ольга К.', prize: 500000, lottery: 'Мгновенный миллион' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <WinNotification />
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Новые лотереи каждый день
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Испытай удачу с{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  мгновенными лотереями
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Выигрывай до 5 миллионов рублей прямо сейчас. Честная игра, мгновенный результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link to="/rules">
                    <Icon name="Info" size={20} className="mr-2" />
                    Как это работает
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        </section>

        <section className="container py-16">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Популярные лотереи</h2>
            <p className="text-muted-foreground text-lg">Выбери свой билет к удаче</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLotteries.map((lottery) => (
              <Card key={lottery.id} className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={lottery.image} 
                    alt={lottery.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {lottery.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white border-0">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярно
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{lottery.name}</CardTitle>
                  <CardDescription>Главный приз до {lottery.maxPrize.toLocaleString()} ₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{lottery.price} ₽</span>
                    <span className="text-sm text-muted-foreground">за билет</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/lotteries">
                Все лотереи
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">Почему выбирают нас</h2>
              <p className="text-muted-foreground text-lg">Играйте с уверенностью</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Icon name="Users" size={14} className="mr-1" />
                Наши победители
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Счастливчики этой недели
              </h2>
              <p className="text-muted-foreground text-lg">
                Каждый день десятки людей выигрывают крупные призы. Может, следующий победитель — это ты?
              </p>
              
              <div className="space-y-4">
                {recentWinners.map((winner, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="Trophy" className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{winner.name}</p>
                        <p className="text-sm text-muted-foreground">{winner.lottery}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary text-lg">
                          {winner.prize.toLocaleString()} ₽
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button size="lg" variant="outline" asChild>
                <Link to="/winners">
                  Все победители
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="flex-1">
              <img 
                src="https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/931e470a-bbe5-4997-b13a-9f84c1da0cad.jpg"
                alt="Winners"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary via-secondary to-accent py-20">
          <div className="container text-center text-white space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Готов попытать удачу?</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Присоединяйся к тысячам победителей и выиграй свой приз уже сегодня
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать сейчас
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
