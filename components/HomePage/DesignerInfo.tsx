import { Rubik } from "next/font/google";
import "./DesignerInfo.css";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["900"] });
const rubikText = Rubik({ subsets: ["hebrew"], weight: ["400"] });

export default function DesignerInfo() {
  return (
    <section
      id="about-us"
      className="designer-info overflow-hidden bg-white my-10 px-10 py-25 flex items-center relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1500px] mx-auto relative">
        <h2
          className={`text-gold text-4xl lg:text-9xl ${rubikTitle.className} mb-4 lg:mr-auto lg:border-l-4 lg:border-gold pl-16`}
        >
          מי
          <br /> אנחנו
        </h2>
        <div>
          <p className={`text-black ${rubikText.className}`}>
            החברה Master Adv לפרסום ושיווק היא חברת פרסום רב-שירותית שהוקמה בשנת
            2009, ושואפת לתמוך באינטרסים הערביים באמצעות שיווקם בפלטפורמות שונות
            לצורך פיתוחם וחשיפתם ללקוחות בצורה מודרנית, חכמה ויצירתית.
            הפלטפורמות עליהן פועלת Master Adv רבות ומגוונות, ומציעות מגוון רחב
            של אפשרויות לעסקים. החברה מתחילה בהגדרת הקווים המנחים לזהות הפרסום
            של העסק לפי קריטריונים שונים וממשיכה לפרסום דיגיטלי וכל מה שקשור
            לפרסום ברשתות החברתיות כמו פייסבוק ואינסטגרם. משרדנו מציע שירותים
            בסיסיים כגון יצירת וניהול עמודי פייסבוק ואינסטגרם חדשים, עיצוב שבועי
            להפעלת העמודים, עד לשיווק ויזואלי באמצעות סרטוני פרסום תקופתיים.
            בנוסף, אנו עוסקים בבניית אתרים וחניות באינטרנט, רישום דומיין ודואר
            אלקטרוני בשם העסק או החברה ועוד. כל זאת תוך התאמה לצרכים העסקיים של
            הלקוח והתאמת חבילות שונות במחירים משתנים המתאימים ליכולת העסק.
          </p>
        </div>
      </div>
    </section>
  );
}
