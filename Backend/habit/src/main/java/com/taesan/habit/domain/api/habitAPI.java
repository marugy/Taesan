package com.taesan.habit.domain.api;

import com.taesan.habit.domain.dto.request.HabitCalendarDayRequest;
import com.taesan.habit.domain.dto.request.HabitCalendarMonthRequest;
import com.taesan.habit.domain.dto.request.HabitCreateRequest;
import com.taesan.habit.domain.dto.request.HabitSavingRequest;
import com.taesan.habit.domain.dto.response.*;
import com.taesan.habit.global.api.ApiResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.taesan.habit.global.api.ApiResult.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/habit-management/habits")
public class habitAPI {

    @GetMapping("/total/calendar/month")
    public ApiResult<HabitCalendarMonthResponse> getTotalMonthlyHabit(
            @ModelAttribute HabitCalendarMonthRequest habitCalendarMonthRequest
    ) {
        DayInfo dayInfo = new DayInfo();
        ArrayList<DayInfo> dayInfoArrayList = new ArrayList<>();
        dayInfoArrayList.add(dayInfo);
        HabitCalendarMonthResponse build = HabitCalendarMonthResponse.builder()
                .dayList(dayInfoArrayList)
                .build();
        return OK(build);
    }

    @GetMapping("/total/calendar/day")
    public ApiResult<HabitCalendarDayResponse> getTotalDailyHabit(
            @ModelAttribute HabitCalendarDayRequest habitCalendarDayRequest
    ) {
        HabitSavingInfo info = new HabitSavingInfo();
        ArrayList<HabitSavingInfo> infoList = new ArrayList<>();
        infoList.add(info);
        HabitCalendarDayResponse build = HabitCalendarDayResponse.builder()
                .habitList(infoList)
                .build();
        return OK(build);
    }

    @GetMapping("/buying")
    public ApiResult<MostBuyingResponse> getMostBuying(
    ) {
        BuyInfo info = new BuyInfo();
        ArrayList<BuyInfo> infoList = new ArrayList<>();
        infoList.add(info);
        MostBuyingResponse build = MostBuyingResponse.builder()
                .buyList(infoList)
                .build();
        return OK(build);
    }

    @PostMapping("/new")
    public ApiResult<Void> createNewHabit(
            @RequestBody HabitCreateRequest habitCreateRequest
            ) {
        return OK(null);
    }

    @GetMapping("/progress")
    public ApiResult<ProgressHabitListResponse> getProgressHabitList(
    ) {
        ProgressHabitInfo info = new ProgressHabitInfo();
        ArrayList<ProgressHabitInfo> infoList = new ArrayList<>();
        infoList.add(info);
        ProgressHabitListResponse build = ProgressHabitListResponse.builder()
                .habitList(infoList)
                .build();
        return OK(build);
    }

    @PutMapping("/progress/{habitId}/end")
    public ApiResult<Void> finishHabit(
            @PathVariable String habitId
    ) {
        return OK(null);
    }

    @GetMapping("/complete")
    public ApiResult<CompleteHabitListResponse> getCompletedHabitList(
    ) {
        return OK(new CompleteHabitListResponse());
    }

    @GetMapping("/{habitId}")
    public ApiResult<HabitDetailResponse> getHabitDetail(
            @PathVariable String habitId
    ) {
        return OK(new HabitDetailResponse());
    }

    @GetMapping("/{habitId}/calendar")
    public ApiResult<HabitCalendarSpecificResponse> getSpecificHabitCalendar(
            @PathVariable String habitId,
            @ModelAttribute HabitCalendarMonthRequest habitCalendarMonthRequest
    ) {
        return OK(new HabitCalendarSpecificResponse());
    }

    @GetMapping("/today")
    public ApiResult<HabitTodaySavingResponse> getTodaySaving(
    ) {
        HabitTodayInfo info = new HabitTodayInfo();
        ArrayList<HabitTodayInfo> infoList = new ArrayList<>();
        infoList.add(info);
        HabitTodaySavingResponse build = HabitTodaySavingResponse.builder()
                .habitList(infoList)
                .build();
        return OK(build);
    }

    @PostMapping("/today/saving")
    public ApiResult<HabitSavingRequest> saveTodaySaving(

    ) {
        return OK(null);
    }

}
