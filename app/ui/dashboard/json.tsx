'use client';
import { useEffect, useState } from 'react';
import { getJson } from '@/app/lib/data';

const JsonWrapper = () => {
  const [json, setJson] = useState(null);

  useEffect(() => {
    const fetchJson = async () => {
      const res = await getJson('client side data');
      setJson(res);
    };
    fetchJson();
  }, []);

  return <div>Json Wrapper</div>;
};

export default JsonWrapper;
