/**
 * Course data for Muối Deutsch Center
 */

export interface Course {
  level: string;
  title: string;
  description: string;
  duration: string;
  sessions: string;
  price: number;
  features: string[];
}

export const COURSES: Course[] = [
  {
    level: 'A1',
    title: 'Tiếng Đức cơ bản A1',
    description: 'Khóa học cho người mới bắt đầu, từ con số 0. Học alphabet, phát âm, giao tiếp cơ bản.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: 3500000,
    features: [
      'Giáo viên bản ngữ',
      'Lớp nhỏ 8-12 học viên',
      'Tài liệu miễn phí',
      'Luyện thi Goethe A1',
      'Học lại miễn phí nếu không đạt'
    ]
  },
  {
    level: 'A2',
    title: 'Tiếng Đức sơ cấp A2',
    description: 'Nâng cao khả năng giao tiếp, mở rộng từ vựng và ngữ pháp. Chuẩn bị cho chứng chỉ A2.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: 3800000,
    features: [
      'Giáo viên bản ngữ',
      'Lớp nhỏ 8-12 học viên',
      'Tài liệu miễn phí',
      'Luyện thi Goethe A2',
      'Học lại miễn phí nếu không đạt'
    ]
  },
  {
    level: 'B1',
    title: 'Tiếng Đức trung cấp B1',
    description: 'Phát triển kỹ năng giao tiếp tự tin, hiểu văn bản phức tạp. Chuẩn bị cho du học và làm việc.',
    duration: '4 tháng',
    sessions: '48 buổi',
    price: 4500000,
    features: [
      'Giáo viên bản ngữ',
      'Lớp nhỏ 6-10 học viên',
      'Tài liệu miễn phí',
      'Luyện thi Goethe B1',
      'Tư vấn du học miễn phí',
      'Học lại miễn phí nếu không đạt'
    ]
  },
  {
    level: 'B2',
    title: 'Tiếng Đức trung cấp cao B2',
    description: 'Thành thạo giao tiếp trong môi trường học tập và làm việc chuyên nghiệp tại Đức.',
    duration: '4 tháng',
    sessions: '48 buổi',
    price: 5000000,
    features: [
      'Giáo viên bản ngữ',
      'Lớp nhỏ 6-10 học viên',
      'Tài liệu miễn phí',
      'Luyện thi Goethe B2',
      'Tư vấn du học & việc làm',
      'Học lại miễn phí nếu không đạt'
    ]
  },
  {
    level: 'C1',
    title: 'Tiếng Đức cao cấp C1',
    description: 'Sử dụng tiếng Đức linh hoạt trong học tập, nghiên cứu và công việc chuyên môn cao.',
    duration: '5 tháng',
    sessions: '60 buổi',
    price: 6000000,
    features: [
      'Giáo viên bản ngữ chuyên sâu',
      'Lớp nhỏ 4-8 học viên',
      'Tài liệu chuyên ngành',
      'Luyện thi Goethe C1',
      'Hỗ trợ học thuật chuyên sâu',
      'Học lại miễn phí nếu không đạt'
    ]
  },
  {
    level: 'C2',
    title: 'Tiếng Đức bậc thầy C2',
    description: 'Đạt trình độ gần như người bản ngữ, hiểu và diễn đạt mọi chủ đề phức tạp một cách chính xác.',
    duration: '6 tháng',
    sessions: '72 buổi',
    price: 7000000,
    features: [
      'Giáo viên bản ngữ chuyên gia',
      'Lớp nhỏ 4-6 học viên',
      'Tài liệu chuyên sâu',
      'Luyện thi Goethe C2',
      'Mentoring 1-1',
      'Học lại miễn phí nếu không đạt'
    ]
  },
];

/**
 * Helper function to get course by level
 */
export function getCourseByLevel(level: string): Course | undefined {
  return COURSES.find(course => course.level === level);
}

/**
 * Helper function to format price in Vietnamese currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', { 
    style: 'currency', 
    currency: 'VND' 
  }).format(price);
}
