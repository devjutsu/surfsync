// Страница истории катаний SurfSync

export default function HistoryPage() {
    return (
      <div className="min-h-screen bg-base-100 text-primary-content p-6 flex flex-col gap-8">
  
        {/* Заголовок */}
        <h1 className="text-3xl font-bold text-center">Surf Sessions History</h1>
  
        {/* Блок поиска по сессиям */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search sessions..."
            className="input input-bordered w-full max-w-md bg-neutral text-neutral-content"
          />
        </div>
  
        {/* Фильтры по дате */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="btn btn-sm btn-primary">Today</button>
          <button className="btn btn-sm btn-primary">This Week</button>
          <button className="btn btn-sm btn-primary">This Month</button>
        </div>
  
        {/* Список сессий */}
        <div className="flex flex-col gap-4 mt-4">
          {/* Пример карточки сессии */}
          <div className="card bg-neutral shadow-md">
            <div className="card-body">
              <h2 className="card-title">Session on Apr 27, 2025</h2>
              <p>Duration: 1h 45m</p>
              <p>Distance: 12.4 km</p>
              <p>Location: Mui Ne Beach</p>
            </div>
          </div>
  
          <div className="card bg-neutral shadow-md">
            <div className="card-body">
              <h2 className="card-title">Session on Apr 26, 2025</h2>
              <p>Duration: 2h 10m</p>
              <p>Distance: 15.8 km</p>
              <p>Location: Mui Ne Lagoon</p>
            </div>
          </div>
  
          {/* Здесь будет динамический список сессий */}
        </div>
  
        {/* Кнопка для перехода к новым записям */}
        <div className="flex justify-center mt-8">
          <button className="btn btn-accent">Start New Session</button>
        </div>
  
      </div>
    );
  }
  
  // + функциональность:
  // - Поиск по тексту или дате
  // - Фильтрация по датам (сегодня, неделя, месяц)
  // - Карточки каждой сессии с инфо: дата, продолжительность, дистанция, место
  // - Нажатие на сессию → открыть подробности с карты и статистикой
  // - Пагинация или бесконечный скроллинг
  