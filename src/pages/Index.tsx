import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const articles = [
    {
      id: 1,
      category: "Дизайн",
      title: "Искусство минимализма в современном дизайне",
      excerpt: "Как простота формы создаёт сильное визуальное воздействие и почему меньше часто означает больше.",
      date: "15 октября 2025",
      readTime: "8 мин",
      image: "https://cdn.poehali.dev/projects/97597610-0784-4b35-8163-c48ed970c44c/files/e443f0e3-b95f-41c8-933f-a03066e5882c.jpg"
    },
    {
      id: 2,
      category: "Типографика",
      title: "Шрифты, которые говорят больше слов",
      excerpt: "Исследование того, как выбор гарнитуры влияет на восприятие текста и эмоциональный отклик читателя.",
      date: "12 октября 2025",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/projects/97597610-0784-4b35-8163-c48ed970c44c/files/706464d4-fbb5-4c6f-9705-481440e1ad02.jpg"
    },
    {
      id: 3,
      category: "Архитектура",
      title: "Геометрия пространства",
      excerpt: "От физической архитектуры к цифровым интерфейсам: как принципы построения пространства работают в вебе.",
      date: "8 октября 2025",
      readTime: "10 мин",
      image: "https://cdn.poehali.dev/projects/97597610-0784-4b35-8163-c48ed970c44c/files/706464d4-fbb5-4c6f-9705-481440e1ad02.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-foreground">Editorial</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        <section className="py-24 border-b border-border animate-fade-in">
          <Link to="/article" className="group block">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span className="uppercase tracking-wider">Дизайн</span>
                  <span>·</span>
                  <time>15 октября 2025</time>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground group-hover:text-primary transition-colors">
                  Искусство минимализма в современном дизайне
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                  Как простота формы создаёт сильное визуальное воздействие и почему меньше часто означает больше в мире цифрового творчества.
                </p>
                
                <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-4 transition-all">
                  <span>Читать статью</span>
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/97597610-0784-4b35-8163-c48ed970c44c/files/e443f0e3-b95f-41c8-933f-a03066e5882c.jpg" 
                    alt="Главная статья"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="py-24">
          <h2 className="text-4xl font-bold mb-16 text-foreground">Последние публикации</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <Link 
                key={article.id} 
                to="/article" 
                className="group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="animate-fade-in">
                  <div className="aspect-[3/2] overflow-hidden rounded-lg mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="uppercase tracking-wider">{article.category}</span>
                    <span>·</span>
                    <time>{article.date}</time>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 leading-tight text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Editorial. Журнальная платформа.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                О проекте
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Подписаться
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
