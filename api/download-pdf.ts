// app/api/download/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  // IMPORTANT: Double-check and modify this path to match your actual PDF location
  const filePath = path.join(process.cwd(), 'public', 'Kadai_Alex_CV.pdf');

  try {
    // Detailed file existence and size checking
    if (!fs.existsSync(filePath)) {
      console.error('File not found at path:', filePath);
      return new NextResponse(null, { 
        status: 404, 
        statusText: 'File Not Found' 
      });
    }

    const stats = fs.statSync(filePath);
    if (stats.size <= 2048) { // Less than 2KB
      console.error('File size is suspiciously small:', stats.size, 'bytes');
      return new NextResponse(null, { 
        status: 400, 
        statusText: 'Invalid File Size' 
      });
    }

    const file = fs.readFileSync(filePath);
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=Kadai_Alex_CV.pdf',
        'Content-Length': stats.size.toString()
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse(null, { status: 500 });
  }
}