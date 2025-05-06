'use client';
import { useThemeStore } from "@/hooks/useThemeStore";

export default function SettingsPage() {
    const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  
    return (
      <div className="min-h-screen bg-base-100 text-primary-content p-6 flex flex-col gap-8">
  
        <h1 className="text-3xl font-bold text-center">Settings</h1>
  
        {/* Настройки профиля */}
        <div className="card bg-neutral shadow-md">
          <div className="card-body">
            <h2 className="card-title">Profile</h2>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-primary-content">Username</span>
              </div>
              <input type="text" placeholder="Enter your name" className="input input-bordered bg-base-100" />
            </label>
          </div>
        </div>
  
        {/* Настройки уведомлений */}
        <div className="card bg-neutral shadow-md">
          <div className="card-body">
            <h2 className="card-title">Notifications</h2>
            <label className="label cursor-pointer justify-between">
              <span className="label-text">Session reminders</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
            <label className="label cursor-pointer justify-between">
              <span className="label-text">Tracking alerts</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>
        </div>
  
        {/* Настройки темы */}
        <div className="card bg-neutral shadow-md">
          <div className="card-body">
            <h2 className="card-title">Appearance</h2>
            <div className="form-control">
            <label className="label cursor-pointer justify-between">
      <span className="label-text">Dark mode</span>
      <input
        type="checkbox"
        className="toggle toggle-accent"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </label>
            </div>
          </div>
        </div>
  
        <div className="flex justify-center">
          <button className="btn btn-error">Log out</button>
        </div>
  
      </div>
    );
  }
  
  // - Переключение языка
  // - Управление устройствами (привязка трекеров)
  // - Выгрузка данных или экспорт сессий
  // - Настройка частоты трекинга и GPS
  // - Интеграции с календарём, Apple Health, Strava и др.