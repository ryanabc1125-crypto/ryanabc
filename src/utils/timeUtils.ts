/**
 * Formats a given date/time to Beijing Time (Asia/Shanghai, UTC+8).
 * Ensures consistency across all client browsers and server runtime environments.
 */
export function getBeijingTimeString(dateInput?: Date | string | number): string {
  const date = dateInput ? new Date(dateInput) : new Date();
  if (isNaN(date.getTime())) {
    return '2026-08-06 13:00:00';
  }

  try {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    
    const parts = formatter.formatToParts(date);
    const getPart = (type: string) => parts.find((p) => p.type === type)?.value || '00';
    return `${getPart('year')}-${getPart('month')}-${getPart('day')} ${getPart('hour')}:${getPart('minute')}:${getPart('second')}`;
  } catch (e) {
    // Fallback if Intl is unavailable
    const utcTime = date.getTime();
    const beijingOffsetMs = 8 * 60 * 60 * 1000;
    const beijingDate = new Date(utcTime + beijingOffsetMs);
    return beijingDate.toISOString().replace('T', ' ').substring(0, 19);
  }
}

/**
 * Short date-time string in Beijing Time (e.g., "08-06 13:25")
 */
export function getShortBeijingTimeString(dateInput?: Date | string | number): string {
  const full = getBeijingTimeString(dateInput);
  return full.substring(5, 16);
}
