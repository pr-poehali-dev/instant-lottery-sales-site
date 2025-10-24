import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Rules = () => {
  const steps = [
    {
      icon: 'UserPlus',
      title: 'Регистрация',
      description: 'Создайте аккаунт или войдите через социальные сети',
    },
    {
      icon: 'CreditCard',
      title: 'Пополнение баланса',
      description: 'Пополните счет любым удобным способом',
    },
    {
      icon: 'Ticket',
      title: 'Выбор лотереи',
      description: 'Выберите понравившуюся лотерею и купите билет',
    },
    {
      icon: 'Zap',
      title: 'Мгновенный результат',
      description: 'Узнайте результат сразу после покупки',
    },
    {
      icon: 'Wallet',
      title: 'Получение выигрыша',
      description: 'Выигрыш автоматически зачисляется на баланс',
    },
  ];

  const faqs = [
    {
      question: 'Как быстро я узнаю о выигрыше?',
      answer: 'Результаты лотереи отображаются мгновенно после покупки билета. Вы сразу увидите, выиграли ли вы приз.',
    },
    {
      question: 'Как я получу свой выигрыш?',
      answer: 'Выигрыш автоматически зачисляется на ваш баланс в системе. Вы можете вывести средства на банковскую карту или электронный кошелек в любое время.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем банковские карты (Visa, MasterCard, Mir), электронные кошельки (Qiwi, ЮMoney), а также переводы через СБП.',
    },
    {
      question: 'Честная ли игра?',
      answer: 'Да, все розыгрыши проводятся с использованием сертифицированного генератора случайных чисел. Результаты каждого розыгрыша можно проверить.',
    },
    {
      question: 'Есть ли возрастные ограничения?',
      answer: 'Участвовать в лотереях могут только лица старше 18 лет. При регистрации требуется подтверждение возраста.',
    },
    {
      question: 'Могу ли я вернуть купленный билет?',
      answer: 'Согласно правилам лотереи, возврат средств за приобретенные билеты не предусмотрен, так как результат определяется мгновенно.',
    },
    {
      question: 'Как работают уведомления о выигрышах?',
      answer: 'При выигрыше вы получаете мгновенное push-уведомление на устройство, а также уведомление на email и в личном кабинете.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Правила игры</h1>
              <p className="text-xl text-muted-foreground">
                Всё, что нужно знать для участия в лотереях
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Как играть</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                          <Icon name={step.icon as any} className="text-white" size={28} />
                        </div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{step.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Основные правила</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <p>
                      <strong>Честность:</strong> Все розыгрыши проводятся с использованием сертифицированного генератора случайных чисел (RNG).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <p>
                      <strong>Возраст:</strong> К участию допускаются только лица старше 18 лет.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <p>
                      <strong>Выплаты:</strong> Выигрыши зачисляются автоматически и доступны для вывода без задержек.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <p>
                      <strong>Безопасность:</strong> Все платежи защищены современными протоколами шифрования.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <p>
                      <strong>Поддержка:</strong> Служба поддержки доступна 24/7 для решения любых вопросов.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
