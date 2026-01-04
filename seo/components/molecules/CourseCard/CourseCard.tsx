'use client';

import React from 'react';
import Link from 'next/link';
import { Typography, Button } from '@/components/atoms';
import { Course, formatPrice } from '@/lib/constants/courses';

export interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  return (
    <div className={`bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      {/* Header with Level Badge */}
      <div className="bg-primary/10 p-6 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
            {course.level}
          </span>
          <Typography variant="h3" className="text-2xl font-bold text-primary">
            {formatPrice(course.price)}
          </Typography>
        </div>
        <Typography variant="h3" className="text-xl font-bold mt-3">
          {course.title}
        </Typography>
      </div>

      {/* Content */}
      <div className="p-6">
        <Typography variant="p" className="text-muted-foreground mb-4">
          {course.description}
        </Typography>

        {/* Duration and Sessions */}
        <div className="flex gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <Typography variant="span" className="text-muted-foreground">
              {course.duration}
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">📚</span>
            <Typography variant="span" className="text-muted-foreground">
              {course.sessions}
            </Typography>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <Typography variant="span" className="text-sm">
                {feature}
              </Typography>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2">
          <Link href={`/khoa-hoc/${course.level.toLowerCase()}`}>
            <Button className="w-full">
              Xem chi tiết
            </Button>
          </Link>
          <Link href="/lien-he">
            <Button variant="outline" className="w-full">
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
