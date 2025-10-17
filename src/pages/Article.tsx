import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Article = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Editorial
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-sm">Назад</span>
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span>Дизайн</span>
            <span>·</span>
            <time>15 октября 2025</time>
            <span>·</span>
            <span>8 мин чтения</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Искусство минимализма в современном дизайне
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Как простота формы создаёт сильное визуальное воздействие и почему меньше часто означает больше в мире цифрового творчества.
          </p>
        </header>

        <figure className="mb-16 -mx-6 md:-mx-12">
          <img 
            src="https://cdn.poehali.dev/projects/97597610-0784-4b35-8163-c48ed970c44c/files/e443f0e3-b95f-41c8-933f-a03066e5882c.jpg" 
            alt="Архитектурная композиция"
            className="w-full h-[500px] object-cover"
          />
          <figcaption className="text-sm text-muted-foreground text-center mt-4 px-6">
            Минимализм в архитектуре — источник вдохновения для цифрового дизайна
          </figcaption>
        </figure>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
            Минимализм — это не просто отсутствие декора. Это философия, которая требует глубокого понимания того, что действительно важно. В эпоху информационной перегрузки способность выделить главное становится настоящим искусством.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Когда мы убираем всё лишнее, остаётся только суть. Каждая линия, каждый цвет, каждый пробел начинают играть важную роль. Пространство между элементами становится не менее значимым, чем сами элементы — оно даёт контенту возможность дышать.
          </p>

          <h2 className="text-4xl font-bold mt-16 mb-6">Принципы минимализма</h2>

          <p className="text-lg leading-relaxed mb-6">
            Великий дизайнер Дитер Рамс сформулировал десять принципов хорошего дизайна, многие из которых напрямую связаны с идеей минимализма. Его знаменитый тезис «Меньше, но лучше» стал мантрой для целого поколения дизайнеров.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-12 italic text-xl text-muted-foreground">
            "Хороший дизайн — это как можно меньше дизайна. Меньше, но лучше — потому что он концентрируется на важных аспектах, а продукты не обременены несущественным."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            В цифровом пространстве эти принципы обретают новое звучание. Минималистичный интерфейс не отвлекает пользователя от основной задачи. Он создаёт ощущение лёгкости и контроля, позволяя сфокусироваться на контенте.
          </p>

          <h2 className="text-4xl font-bold mt-16 mb-6">Типографика как основа</h2>

          <p className="text-lg leading-relaxed mb-6">
            Когда вы убираете декоративные элементы, типографика выходит на первый план. Выбор шрифта, размер, межстрочное расстояние — всё это становится критически важным. Хорошая типографика создаёт ритм, направляет взгляд читателя и задаёт настроение всей композиции.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Контраст между заголовками и основным текстом, правильное использование пробелов, грамотная иерархия информации — эти элементы превращают простой текст в приятный визуальный опыт.
          </p>

          <h2 className="text-4xl font-bold mt-16 mb-6">Цвет и пространство</h2>

          <p className="text-lg leading-relaxed mb-6">
            Минималистичная палитра не означает отсутствие цвета. Это означает осознанный выбор каждого оттенка. Один яркий акцент может произвести большее впечатление, чем радуга цветов. Пространство вокруг элементов создаёт фокус и подчёркивает важность контента.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            В конечном счёте, минимализм — это про уважение к аудитории. Это признание того, что время и внимание людей ценны, и мы не должны их растрачивать на ненужные детали. Это смелость довериться простоте и позволить содержанию говорить само за себя.
          </p>
        </div>

        <footer className="border-t border-border pt-12 mt-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="User" size={32} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">Алексей Иванов</p>
              <p className="text-muted-foreground">Дизайнер и арт-директор</p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Article;
