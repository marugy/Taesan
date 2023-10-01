package com.ts.taesan.domain.habit.api;

import com.ts.taesan.domain.habit.dto.CreateHabitRequest;
import com.ts.taesan.domain.habit.dto.response.HabitListResponse;
import com.ts.taesan.domain.habit.service.HabitQService;
import com.ts.taesan.domain.habit.service.HabitService;
import com.ts.taesan.domain.member.entity.Member;
import com.ts.taesan.domain.member.service.MemberService;
import com.ts.taesan.global.api.ApiResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ts.taesan.global.api.ApiResponse.OK;

@Api(tags = "Habit")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/habit-management/habits")
@Slf4j
public class HabitApi {

    private final HabitService habitService;
    private final HabitQService habitQService;
    private final MemberService memberService;

    @ApiOperation(value = "전체 습관 달력 조회", notes = "월을 입력하여 월별 전체 습관 달력을 조회한다 API")
    @GetMapping("/total-calendar/{month}")
    public ApiResponse<?> getTotalCalendar(@AuthenticationPrincipal User user, @PathVariable(value = "month") int month) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "전체 습관 달력 상세 조회", notes = "월과 일을 입력하여 전체 습관 달력 상세 조회한다 API")
    @GetMapping("/total-calendar/{month}/{day}")
    public ApiResponse<?> getTotalCalendarDetail(@AuthenticationPrincipal User user, @PathVariable(value = "month") int month, @PathVariable(value = "day") int day) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "자주하는 소비 조회", notes = "지난달 자주한 소비를 조회한다.")
    @GetMapping("/buying")
    public ApiResponse<?> getBuying(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "습관 생성", notes = "습관을 생성한다.")
    @PostMapping("")
    public ApiResponse<?> createHabit(@AuthenticationPrincipal User user, @RequestBody CreateHabitRequest createHabitRequest) {
        Long memberId = Long.parseLong(user.getUsername());
        Member member = memberService.findById(memberId);
        habitService.createHabit(member, createHabitRequest);
        return OK(null);
    }

    @ApiOperation(value = "진행중인 습관 조회", notes = "진행중인 습관을 조회한다.")
    @GetMapping("/progress")
    public ApiResponse<List<HabitListResponse>> getProgressHabits(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        List<HabitListResponse> progressHabits = habitQService.getProgressHabits(memberId);
        return OK(progressHabits);
    }

    @ApiOperation(value = "습관 종료", notes = "습관 id 를 전송하여 습관을 종료한다.")
    @PutMapping("/progress/{habitId}")
    public ApiResponse<?> stopHabit(@AuthenticationPrincipal User user, @PathVariable(value = "habitId") Long habitId) {
        habitService.endHabit(habitId);
        return OK(null);
    }

    @ApiOperation(value = "종료된 습관 조회", notes = "종료한 습관을 조회한다.")
    @GetMapping("/complete")
    public ApiResponse<List<HabitListResponse>> getCompleteHabits(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());
        List<HabitListResponse> completeHabits = habitQService.getCompleteHabits(memberId);
        return OK(completeHabits);
    }

    @ApiOperation(value = "습관 상세 조회", notes = "습관 id로 습관을 조회한다.")
    @GetMapping("/{habitId}")
    public ApiResponse<?> getCompleteHabits(@AuthenticationPrincipal User user, @PathVariable(value = "habitId") Long habitId) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "습관 달력 조회", notes = "습관 id와 월을 입력하여 습관 달력을 조회한다.")
    @PostMapping("/{habitId}/calendars/{month}")
    public ApiResponse<?> getHabitCalendar(@AuthenticationPrincipal User user, @PathVariable(value = "habitId") Long habitId, @PathVariable(value = "month") int month) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "오늘 아낀 습관 목록 조회", notes = "오늘 아낀 습관을 조회한다.")
    @GetMapping("/today")
    public ApiResponse<?> getClearHabit(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }

    @ApiOperation(value = "오늘 아낀 습관 저금", notes = "오늘 아낀 습관들을 저금한다.")
    @PostMapping("/today")
    public ApiResponse<?> saveHabits(@AuthenticationPrincipal User user) {
        Long memberId = Long.parseLong(user.getUsername());

        return OK(null);
    }
}
