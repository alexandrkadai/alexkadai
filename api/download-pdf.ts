import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'Kadai_Alex_CV.pdf');

  try {
    if (!fs.existsSync(filePath)) {
      console.error('File not found at path:', filePath);
      return new NextResponse(null, { 
        status: 404, 
        statusText: 'File Not Found' 
      });
    }
    const stat = fs.statSync(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Kadai_Alex_CV.pdf');
    res.setHeader('Content-Length', stat.size);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
}
