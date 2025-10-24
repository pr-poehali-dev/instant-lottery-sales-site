import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

interface WinNotificationProps {
  enabled?: boolean;
}

const WinNotification = ({ enabled = true }: WinNotificationProps) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!enabled || shown) return;

    const timer = setTimeout(() => {
      toast.success(
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon name="Trophy" className="text-white" size={20} />
          </div>
          <div>
            <p className="font-semibold">Поздравляем победителя!</p>
            <p className="text-sm text-muted-foreground">Иван К. выиграл 50 000 ₽</p>
          </div>
        </div>,
        {
          duration: 5000,
          position: 'top-right',
        }
      );
      setShown(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [enabled, shown]);

  return null;
};

export default WinNotification;
