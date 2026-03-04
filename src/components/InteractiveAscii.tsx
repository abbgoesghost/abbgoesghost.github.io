import { useEffect, useRef } from 'react';
import './InteractiveAscii.css';

const InteractiveAscii = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const charsRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const asciiArt = `Ìnu3Ì‡ò3ƒö™©ùüu 
                     us‰Ï¢@C@3@¼       ör¤‡u                   
                     6™n¼@3        ŸO0ö±‰nÍÌö                  
                     íwÌJ î5±wsnóÏ    Jönî¢©>                  
                     ÏCÏç@ü3Lç     £CJwÏ3ÏIó¼                  
                     ‰Y0óÍ   ±3on½ÌÌóC3ò¢LòÏ§nc                
                     SóösYÌzCöööƒ‡ò0Csu¢¾33Ín½                 
                      VnòóLÍÏÌn‰Í  @      Oó                   
                       ‰nVz   Ln   L±VIJÌò‡¢zÏ                 
                       ¾@¢29ú3nÌ%½3Ìö33ór3Có±                  
                          žC¢wL½@ùüJ±CV ±Ï¢½                   
                          óV zó0ÌnÍÏösöò½öóu                   
                              ÌuÍL¾@Í¢¤±óöò¤                   
                               VöÌÍ0¢¢s&lo‡uu¼                 
                                0YÌn@sòJîu‰‡0                  
                              Y@Ì‰Í±öòLs@uó¼n©zk ò                 
                             ©ù¢VÍJ&±sÍ3Ì±ósu uç tn CC               
                          ò  Í@‡ò‰Ïs©Ïò¢ƒ¼uóö ½ƒ  uzƒöCó¢s
                      Lü3L‰òn 2J£  ó@‡%s½¢Y©ö     0LtontCC£©
                      0óuóÏs õn¢ô    ùó½ru¢n@öò¼î    ò±©%L5ù3¢%%z
                  uzL©™CnsYJù™L‰‰½ 5      Í3 ‰î=lƒ±wuöç3±     Ïaav"a
              n<¢ C   aLCwö     Ï¢ VVüs   ¢öC½¤µïî LCƒsL¤òÌUu@ö_éyç_é
               ½  ½½@òƒ0V± L±3óstö  3óJò% ó¢ JJn  óÍ‰J±s‰ó ™nò½é"é"çcçrç
            & c¼TYCv¢ Íz‰¤¢½±ò¢Ij¤Ï     @ ƒJ î=Y c3Ïu1vv£‡¢©Ì¼¢]@€@€@€]€
            2LÍÏ    úJòö£±Vó£LÍ©n@¼     ö n±unu  3         Ìù  ##{#{~#{~{
               lo‡‰ ƒ3ÍznL0@5ó@ƒtu0r  zón o± c   cI  öùù3Cóôu¤¼{#^^@{iih{@
            C YL¼3î   üîssn¢‰      ‡       ö‡Ît1£x¼Ívz3¤îzöCJs‡#^^@{iö@@±^€
            f ƒ‡tn¤ƒaò2öC3òó Ï™wÏVù‰V¢¼Lƒ ÌÌ Yîu¾Ì    î‰üY©¼Ï±2çàç#^^@{iih€
                   uôw©¢¢Y‰  a3%Ì¢sÍòsC‡@‰‰Ìs‡jzÌÌ‰òCÏƒƒ%üóô@ƒw#^^@{ö@@±ôn
           ±ƒ ©@‡  z ‰wò¼0Ïç©0    V ÌôsçuVnÍ±urn‡n  ó‰©u¤ü£&óa3#^^@{ii##{€
            f õ¢Iƒ r© £@LüüLÌùVY5Î%LV Ï™ÌJ   ®ç  ÇTO ±où3L±&òòV#^^@{iih{@{
                     ò Ï‰Ì@s óö@@±ônC©©V5V£C‡Ïƒc1¤Ì#^^@{iih\\\
           ±bs
`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('No canvas');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('No context');
      return;
    }

    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
      
      console.log('Canvas size:', rect.width, rect.height);
      
      const lines = asciiArt.trim().split('\n');
      const charSize = Math.min(rect.width / 50, 20);
      const lineHeight = charSize * 1.4;
      const totalHeight = lines.length * lineHeight;
      const startY = (rect.height - totalHeight) / 2 + lineHeight;
      const centerX = rect.width / 2;

      charsRef.current = [];
      
      lines.forEach((line, lineIndex) => {
        const lineWidth = line.length * charSize * 0.6;
        const lineStartX = centerX - lineWidth / 2;
        
        for (let i = 0; i < line.length; i++) {
          if (line[i].trim() !== '') {
            const targetX = lineStartX + i * charSize * 0.6;
            const targetY = startY + lineIndex * lineHeight;
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.max(rect.width, rect.height) * 1.5;
            const randomStartX = centerX + Math.cos(angle) * distance;
            const randomStartY = rect.height / 2 + Math.sin(angle) * distance;
            
            charsRef.current.push({
              char: line[i],
              x: randomStartX,
              y: randomStartY,
              targetX: targetX,
              targetY: targetY,
              vx: 0,
              vy: 0
            });
          }
        }
      });
      
      console.log('Chars initialized:', charsRef.current.length);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;
    
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      const charSize = Math.min(rect.width / 50, 20);
      ctx.font = `${charSize}px "Courier New", monospace`;
      ctx.fillStyle = '#ffffff';
      ctx.textBaseline = 'middle';

      const repelRadius = 80;
      const repelForce = 0.5;
      const returnForce = 0.12;
      const friction = 0.85;

      charsRef.current.forEach(char => {
        const dx = char.targetX - char.x;
        const dy = char.targetY - char.y;
        char.x += dx * returnForce;
        char.y += dy * returnForce;

        const mdx = char.x - mouseRef.current.x;
        const mdy = char.y - mouseRef.current.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * repelForce;
          char.vx += (mdx / dist) * force;
          char.vy += (mdy / dist) * force;
        }

        char.x += char.vx;
        char.y += char.vy;
        
        char.vx *= friction;
        char.vy *= friction;

        ctx.fillText(char.char, char.x, char.y);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="interactive-ascii-container">
      <canvas ref={canvasRef} className="interactive-ascii-canvas" />
    </div>
  );
};

export default InteractiveAscii;
