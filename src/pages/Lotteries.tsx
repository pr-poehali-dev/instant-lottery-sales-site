import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Lotteries = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const lotteries = [
    {
      id: 1,
      name: 'Золотая удача',
      price: 100,
      maxPrize: 1000000,
      category: 'standard',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/79f85519-badf-4d43-bb51-6b2a9db0fedf.jpg',
      odds: '1:100',
      popular: true,
    },
    {
      id: 2,
      name: 'Мгновенный миллион',
      price: 200,
      maxPrize: 5000000,
      category: 'premium',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/16fee87e-fa76-471c-a432-0652b6c7cc6a.jpg',
      odds: '1:500',
      popular: true,
    },
    {
      id: 3,
      name: 'Счастливый билет',
      price: 50,
      maxPrize: 500000,
      category: 'standard',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/16fee87e-fa76-471c-a432-0652b6c7cc6a.jpg',
      odds: '1:50',
      popular: false,
    },
    {
      id: 4,
      name: 'Бриллиантовый куш',
      price: 500,
      maxPrize: 10000000,
      category: 'vip',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/79f85519-badf-4d43-bb51-6b2a9db0fedf.jpg',
      odds: '1:1000',
      popular: false,
    },
    {
      id: 5,
      name: 'Звездная ночь',
      price: 75,
      maxPrize: 750000,
      category: 'standard',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/16fee87e-fa76-471c-a432-0652b6c7cc6a.jpg',
      odds: '1:75',
      popular: false,
    },
    {
      id: 6,
      name: 'Супер джекпот',
      price: 300,
      maxPrize: 7500000,
      category: 'premium',
      image: 'https://cdn.poehali.dev/projects/7ff91bd6-4915-48f0-9d0a-788a05e96dcd/files/79f85519-badf-4d43-bb51-6b2a9db0fedf.jpg',
      odds: '1:750',
      popular: false,
    },
  ];

  const filteredLotteries = selectedCategory === 'all'
    ? lotteries
    : lotteries.filter(lottery => lottery.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Каталог лотерей</h1>
              <p className="text-xl text-muted-foreground">
                Выбирай билет по душе и выигрывай крупные призы
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="standard">Стандарт</TabsTrigger>
              <TabsTrigger value="premium">Премиум</TabsTrigger>
              <TabsTrigger value="vip">VIP</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLotteries.map((lottery) => (
                  <Card key={lottery.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                      <Badge className="absolute top-3 left-3 bg-white/90">
                        {lottery.category === 'standard' && 'Стандарт'}
                        {lottery.category === 'premium' && 'Премиум'}
                        {lottery.category === 'vip' && 'VIP'}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{lottery.name}</CardTitle>
                      <CardDescription>Главный приз до {lottery.maxPrize.toLocaleString()} ₽</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Шанс выигрыша:</span>
                        <span className="font-semibold">{lottery.odds}</span>
                      </div>
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
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lotteries;
