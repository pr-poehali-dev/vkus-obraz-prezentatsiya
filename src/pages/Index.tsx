import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [uploadedImage, setUploadedImage] = useState(false);

  const cities = [
    { name: 'Москва', temp: '-5°C', weather: 'Снег' },
    { name: 'Санкт-Петербург', temp: '-3°C', weather: 'Облачно' },
    { name: 'Казань', temp: '-8°C', weather: 'Ясно' },
    { name: 'Сочи', temp: '+12°C', weather: 'Дождь' },
    { name: 'Екатеринбург', temp: '-10°C', weather: 'Снег' }
  ];

  const events = [
    { id: 'business', name: 'Деловая встреча', icon: 'Briefcase' },
    { id: 'party', name: 'Вечеринка', icon: 'PartyPopper' },
    { id: 'dinner', name: 'Ужин в ресторане', icon: 'Utensils' },
    { id: 'casual', name: 'Прогулка', icon: 'Footprints' },
    { id: 'sport', name: 'Спортивное мероприятие', icon: 'Dumbbell' }
  ];

  const tips = [
    {
      title: 'Многослойность - ключ к успеху',
      description: 'В 2025 году актуальны образы, которые можно адаптировать под температуру помещения',
      icon: 'Layers'
    },
    {
      title: 'Цветовая палитра сезона',
      description: 'Пурпурные, лиловые и фиолетовые оттенки - тренд года',
      icon: 'Palette'
    },
    {
      title: 'Устойчивая мода',
      description: 'Используйте вещи из гардероба повторно в разных комбинациях',
      icon: 'Recycle'
    },
    {
      title: 'Аксессуары решают всё',
      description: 'Один образ можно трансформировать с помощью правильных аксессуаров',
      icon: 'Watch'
    }
  ];

  const handleImageUpload = () => {
    setUploadedImage(true);
  };

  const currentWeather = cities.find(c => c.name === selectedCity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ВкусОбраза
          </h1>
          <p className="text-xl text-purple-800 max-w-3xl mx-auto leading-relaxed">
            Интеллектуальный подбор образов для любых мероприятий с учетом погоды и вашего гардероба
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 text-purple-700">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Умный подбор
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-pink-100 text-pink-700">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Тренды 2025
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Выберите город</CardTitle>
              <CardDescription>Погода влияет на выбор образа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full border-purple-200 focus:ring-purple-500">
                  <SelectValue placeholder="Ваш город" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {currentWeather && (
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-700 font-medium">Сейчас в городе</p>
                      <p className="text-3xl font-bold text-purple-900">{currentWeather.temp}</p>
                    </div>
                    <div className="text-right">
                      <Icon name="Cloud" size={48} className="text-purple-500" />
                      <p className="text-sm text-purple-700">{currentWeather.weather}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Camera" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Ваш гардероб</CardTitle>
              <CardDescription>Сфотографируйте свои вещи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
                   onClick={handleImageUpload}>
                {uploadedImage ? (
                  <div className="animate-fade-in">
                    <img 
                      src="https://cdn.poehali.dev/projects/89cef50a-4417-4d23-87e9-17979a79b11d/files/800fab7f-3988-4d6f-9b8d-07088885593c.jpg" 
                      alt="Гардероб" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm text-purple-700 font-medium">Гардероб загружен</p>
                  </div>
                ) : (
                  <>
                    <Icon name="Upload" size={48} className="mx-auto text-purple-400 mb-3" />
                    <p className="text-purple-700 font-medium">Нажмите для загрузки</p>
                    <p className="text-sm text-purple-500 mt-2">JPG, PNG до 10MB</p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl">Мероприятие</CardTitle>
              <CardDescription>Куда вы собираетесь?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                <SelectTrigger className="w-full border-purple-200 focus:ring-purple-500">
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.id}>
                      <div className="flex items-center gap-2">
                        <Icon name={event.icon as any} size={16} />
                        <span>{event.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedEvent && (
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg animate-fade-in">
                  <img 
                    src="https://cdn.poehali.dev/projects/89cef50a-4417-4d23-87e9-17979a79b11d/files/7e64d490-84a7-4495-9cef-27aa6f85c1ff.jpg" 
                    alt="Мероприятие" 
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-purple-700 text-center font-medium">
                    {events.find(e => e.id === selectedEvent)?.name}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {selectedCity && uploadedImage && selectedEvent && (
          <div className="text-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-glow"
            >
              <Icon name="Sparkles" size={24} className="mr-2" />
              Подобрать образ
            </Button>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Полезные советы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={tip.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 text-sm leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 border-none text-white">
            <CardContent className="p-12">
              <Icon name="Sparkles" size={64} className="mx-auto mb-6 animate-glow" />
              <h3 className="text-3xl font-bold mb-4">Готовы создать идеальный образ?</h3>
              <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                ВкусОбраза использует искусственный интеллект для анализа погоды, вашего гардероба и типа мероприятия, 
                чтобы предложить вам стильные и уместные образы
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Icon name="Check" size={20} />
                  <span>Учет погоды</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Icon name="Check" size={20} />
                  <span>Анализ гардероба</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Icon name="Check" size={20} />
                  <span>Тренды 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
