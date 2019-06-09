var questions = [
    {
        "question": "1.你每天都穿不同的衣服嗎？",
        "answers": [
            ["是的", 3],
            ["不是", 2],
        ]
    },
    {
        "question": "2.你的手機設置了來電顯示服務嗎？",
        "answers": [
            ["是的", 3],
            ["不是", 4],
        ]
    },
    {
        "question": "3.你的電腦系統被你私自的修改過嗎？",
        "answers": [
            ["是的", 5],
            ["不是", 5],
        ]
    },
    {
        "question": "4.無論是做什麼事情，你都希望把屬於自己的東西個性化嗎？",
        "answers": [
            ["是的", 7],
            ["不是", 6],
        ]
    },
    {
        "question": "5.你是一個佔有慾望非常強的人嗎？",
        "answers": [
            ["是的", 7],
            ["不是", 6],
        ]
    },
    {
        "question": "6.你經常因為一個異性長得好看而喜歡對方嗎？",
        "answers": [
            ["是的", 8],
            ["不是", 7],
        ]
    },
    {
        "question": "7.戀愛時候的你經常和戀人吵架嗎？",
        "answers": [
            ["是的", 11],
            ["不是", 9],
        ]
    },
    {
        "question": "8.你經常被人說沒有生活情趣嗎？",
        "answers": [
            ["是的", 10],
            ["不是", 11],
        ]
    },
    {
        "question": "9.吃飯之前，你一定會找地方洗手嗎？",
        "answers": [
            ["是的", 10],
            ["不是", 12],
        ]
    },
    {
        "question": "10.做事情拖拖拉拉是你的習慣嗎？",
        "answers": [
            ["是的", 13],
            ["不是", 11],
        ]
    },
    {
        "question": "11.你每個星期至少會頭疼一次嗎？",
        "answers": [
            ["是的", 14],
            ["不是", 13],
        ]
    },
    {
        "question": "12.你很容易得病嗎？",
        "answers": [
            ["是的", 13],
            ["不是", 14],
        ]
    },
    {
        "question": "13.你是一個非常害怕衰老的人嗎？",
        "answers": [
            ["是的", 16],
            ["不是", 17],
        ]
    },
    {
        "question": "14.無論做什麼事情你都不希望有人比自己優秀嗎？",
        "answers": [
            ["是的", 15],
            ["不是", "A"],
        ]
    },
    {
        "question": "15.如果法律允許，你會擁有第2個和你有婚姻關係的愛人嗎？",
        "answers": [
            ["是的", 18],
            ["不是", "E"],
        ]
    },
    {
        "question": "16.你是一個非常能喝酒的人嗎？",
        "answers": [
            ["是的", "E"],
            ["不是", "B"],
        ]
    },
    {
        "question": "17.罵人是你經常做的事情嗎？",
        "answers": [
            ["是的", 19],
            ["不是", "A"],
        ]
    },
    {
        "question": "18.你是一個超級害怕吵架的人嗎？",
        "answers": [
            ["是的", "D"],
            ["不是", 20],
        ]
    },
        {
        "question": "19.你非常愛好天文學嗎？",
        "answers": [
            ["是的", "C"],
            ["不是", 20],
        ]
    },
            {
        "question": "20.你會莫名其妙的討厭批評過你的人嗎？",
        "answers": [
            ["是的", "C"],
            ["不是", "D"],
        ]
    },
];

var finalAnswers = {
    "A": ["銀河系", "你現在所生活在的地球就是屬於銀河系中的一個星球，所以說你還是非常適合居住在地球的！你承認人的生存是需要意義的，如果一個人每天無所事事的做著自己都不知道為什麼要做的事情，是不是活著，也就不是那麼的重要了。你是一個並不奢求自己的生存環境多麼的美好，或者自己生存的意義有多麼偉大的人。你只希望在自己活著的這段時間裡讓自己感覺到活著很幸福。只有有終結的生命才是完美，擁有絕對生存期限的銀河系最適合你。"],
    "B": ["英仙星團", "星團和星系比起來，就顯得比較的雜亂，也就是說不同的星球並不處於一個集中的整體內。而現實生活中的你也過著擁有著星團一樣性質的生活。從大多數方面來講，你的生活很雜亂無章，有太多的東西你只知道個大概，而真正需要你著手的時候，你卻不知道要從什麼地方開始。這種生活方式通常是因為你不細心的性格和惰性養成的，理性上講，只要你開始專心致志的為一件事情努力，你會把這件事情做得比較完美的。"],
    "C": ["獅子座中的旋渦星系", "獅子座本身就是一個擁有著王權和霸氣感覺的星座，而最適合生活在這個星系中的你，也擁有著絕對的追逐權利和霸氣的生活方式。你希望被人愛著，哄著，甚至崇拜著，但是你並不介意這些人是不是你熟悉或者愛著的人。你喜歡被其他人關注，因為被人關注的時候，你會逃出生活中無聊的感覺和無奈的感覺。存在於獅子座的星系中會讓你這種渴望被人追逐的慾望變得更加的強烈，也會讓你被更奢侈的滿足。"],
    "D": ["旋渦星系", "旋渦星系從名字上聽就可以知道這個星系的外表是呈旋渦狀的，且向著一個中心無休止的延伸著，或者說是無法被肉眼觀察到的延伸著。你就是一個生活在一個旋渦中的人，而這個旋渦也並不是由於一個或者兩個不合心意的不良因素引起的。生活中總是遇到這樣或者那樣困難的你，經常在想自己為什麼就這麼莫名其妙的倒霉，而其他人可以安安穩穩的過日子。其實，如果一個人站在旋渦的底端向上看，你會發現自己已經站在了最頂端。"],
    "E":["不規則星系", "不規則的東西是沒有什麼規律可以講，也是沒有辦法被預料和推測的。當然不規則的星系也是這個樣子，這個星系的形狀，環境，發展模式是沒有辦法被準確的推斷的。你的生活也是一樣，你是適合生活在不規則的星系的人。你目前的人生目標是盡量讓現在的每一天都過得很美好，而至於明天或者後天是什麼樣子，你都不願意去想。因為對於你來說，未來是一個太大的未知數，與其花費時間去考慮隨時可以改變的事情，不如珍惜現在。"]
};
