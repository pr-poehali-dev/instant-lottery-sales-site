import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@lotomania.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '8 (800) 555-35-35',
      description: 'Бесплатно по России',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Круглосуточно',
      description: 'Поддержка 24/7',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Ленина, 1',
      description: 'Офис для посетителей',
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', label: 'Instagram', url: '#' },
    { icon: 'Facebook', label: 'Facebook', url: '#' },
    { icon: 'Twitter', label: 'Twitter', url: '#' },
    { icon: 'MessageCircle', label: 'Telegram', url: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Контакты</h1>
              <p className="text-xl text-muted-foreground">
                Мы всегда на связи и готовы помочь
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input id="subject" placeholder="Тема сообщения" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Расскажите, чем мы можем помочь..."
                        rows={6}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name={info.icon as any} className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-semibold">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                  <CardDescription>Следите за новостями и акциями</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center gap-2 p-3 border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors"
                      >
                        <Icon name={social.icon as any} size={20} />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name="Headphones" className="text-white" size={32} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Нужна помощь прямо сейчас?</h3>
                  <p className="text-muted-foreground">
                    Наша служба поддержки работает круглосуточно и готова ответить на любые вопросы
                  </p>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Открыть чат
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
