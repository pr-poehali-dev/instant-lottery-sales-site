import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Winners = () => {
  const winners = [
    {
      id: 1,
      name: 'Анна М.',
      prize: 1000000,
      lottery: 'Золотая удача',
      date: '24 октября 2025',
      city: 'Москва',
    },
    {
      id: 2,
      name: 'Дмитрий П.',
      prize: 500000,
      lottery: 'Счастливый билет',
      date: '23 октября 2025',
      city: 'Санкт-Петербург',
    },
    {
      id: 3,
      name: 'Ольга К.',
      prize: 5000000,
      lottery: 'Мгновенный миллион',
      date: '22 октября 2025',
      city: 'Екатеринбург',
    },
    {
      id: 4,
      name: 'Сергей В.',
      prize: 750000,
      lottery: 'Звездная ночь',
      date: '21 октября 2025',
      city: 'Казань',
    },
    {
      id: 5,
      name: 'Елена Т.',
      prize: 250000,
      lottery: 'Золотая удача',
      date: '20 октября 2025',
      city: 'Новосибирск',
    },
    {
      id: 6,
      name: 'Александр Н.',
      prize: 3000000,
      lottery: 'Супер джекпот',
      date: '19 октября 2025',
      city: 'Нижний Новгород',
    },
    {
      id: 7,
      name: 'Мария Л.',
      prize: 100000,
      lottery: 'Счастливый билет',
      date: '18 октября 2025',
      city: 'Самара',
    },
    {
      id: 8,
      name: 'Игорь С.',
      prize: 10000000,
      lottery: 'Бриллиантовый куш',
      date: '17 октября 2025',
      city: 'Ростов-на-Дону',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Icon name="Trophy" size={14} className="mr-1" />
                Наши победители
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Счастливчики недели</h1>
              <p className="text-xl text-muted-foreground">
                Каждый день появляются новые победители. Может быть, завтра это будешь ты?
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {winners.map((winner, index) => (
              <Card 
                key={winner.id} 
                className="hover:shadow-lg transition-shadow animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Trophy" className="text-white" size={28} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{winner.name}</h3>
                          <p className="text-sm text-muted-foreground">{winner.city}</p>
                        </div>
                        <Badge 
                          className="bg-gradient-to-r from-primary to-secondary text-white border-0 text-lg px-3 py-1"
                        >
                          {winner.prize.toLocaleString()} ₽
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Ticket" size={16} className="text-muted-foreground" />
                          <span className="font-medium">{winner.lottery}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span>{winner.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <Icon name="Sparkles" size={48} className="mx-auto text-primary" />
              <h2 className="text-3xl font-bold">Хочешь попасть в этот список?</h2>
              <p className="text-lg text-muted-foreground">
                Купи свой счастливый билет прямо сейчас и стань следующим победителем!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Winners;
