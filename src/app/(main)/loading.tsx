import Skeleton from 'react-loading-skeleton'
import DashboardSkeleton  from '@/components/Skeletons';


import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <DashboardSkeleton/>
}