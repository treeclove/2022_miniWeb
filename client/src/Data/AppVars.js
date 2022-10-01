import create from 'zustand';

const sceneData = create(set => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => { return { sceneIndex } }),
    
}));

const pageData = create((set) => ({
    previndex: [],
    setPrevIndex: (prevIndex) => set(() => { return { prevIndex } }),
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => { return { pageIndex } }),
    dataAry: ['name', 'image', 'qusetion', 
        'answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 
        'm1', 'm2', 'm3', 'm4', 'm5', 'm6'],
    setAry: (dataAry) => set(() => { return { dataAry } })
}
))

const userSelectData = create((set) => ({
    userSelect: [],
    setUserSelect: (userSelect) => set(() => {
        return { userSelect };
    })
}
))

const questionData = [
    //["index", "image", "q", "a1", "a2", "a3", "a4", "a5", "a6", "m1", "m2", "m3", "m4", "m5", "m6"],
    ["q0", "temp", "성별이 어떻게 돼 ?", "여", "남", "선택하지 않을래", "noData", "noData", "noData", "3", "-", "-", "-", "-", "-"],
    ["q1", "temp", "나이는 어떻개 돼 ?", "0~19세", "20~29세", "30~39세", "40~49세", "50~59세", "60세 이상", "-", "-", "-", "-", "-", "-"],
    ["q2", "temp", "지금 대한민국 국적이야 ?", "응.한국 국적이야", "아니 외국 국적이야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q3", "temp", "퀴어야 ?", "응.퀴어야", "퀴어 아니야", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q4", "temp", "장애가 있어 ?", "응 있어", "아니.없어.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q5", "temp", "지금 수도권에 살고있어 ?", "응 수도권에 살아", "아니.비 수도권에 살아", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q6", "temp", "지금 결혼한 상태야 ?", "응 결혼한 상태야", "아니.결혼 안한 상태야.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q7", "temp", "본인 소유의 집이 있어 ?", "응 있어", "아니.없어.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q8", "temp", "몇 채 가지고 있어 ?", "1채", "1채 이상.", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["q9", "temp", "그럼 어떻게 살고 있어 ?", "월세야.", "반전세야.", "전세야.", "부모님 집에서.", "기타", "noData", "-", "-", "-", "-", "-","-"],
    ["q10", "temp", "결과보기", "결과보기", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-", "-"],
    ["last", "temp", "this is temp Question 7", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"],
    ["end", "temp", "this is temp Question 8", "noData", "noData", "noData", "noData", "noData", "noData", "-", "-", "-", "-", "-", "-"]
]


export {sceneData, pageData, userSelectData, questionData}