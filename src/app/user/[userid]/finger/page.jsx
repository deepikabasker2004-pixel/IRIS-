import React from 'react'
import FingerprintDashboard from './fingerDashboard';

export default async function page({params}) {

      const { userid } = await params;
   return <FingerprintDashboard userid={userid} />;
}

 